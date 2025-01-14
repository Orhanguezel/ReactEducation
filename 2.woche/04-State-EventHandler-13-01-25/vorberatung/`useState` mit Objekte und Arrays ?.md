### **React'te `useState` ile Nesne (Object) ve Dizi (Array) Kullanımı**

React'te `useState` Hook'u, bileşenlerde durum (state) yönetimi için kullanılan bir araçtır. `useState`, sadece basit veri tipleri (`number`, `string`, `boolean`) değil, aynı zamanda karmaşık veri tipleri (`object`, `array`) ile de kullanılabilir.

Ancak nesne ve dizilerle çalışırken React'in `state` güncellemelerindeki immutability (değiştirilemezlik) prensibine dikkat edilmelidir.

---

### **1. `useState` ile Nesne Kullanımı**

Bir nesne durumunu yönetirken, React'te state'in doğrudan değiştirilmesi yerine, yeni bir nesne oluşturulup bu yeni nesne ile güncelleme yapılmalıdır.

#### **Örnek: Basit Bir Nesne State**

```jsx
import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Ali",
    age: 25,
    location: "İstanbul",
  });

  const updateName = () => {
    setUser({ ...user, name: "Ahmet" }); // Eski state'i koruyarak sadece 'name' güncellenir
  };

  return (
    <div>
      <p>Ad: {user.name}</p>
      <p>Yaş: {user.age}</p>
      <p>Konum: {user.location}</p>
      <button onClick={updateName}>Adı Güncelle</button>
    </div>
  );
}

export default UserProfile;
```

#### **Açıklama:**
- `setUser({ ...user, name: "Ahmet" })`: Spread operatörü (`...`) ile eski `user` nesnesi kopyalanır, ardından `name` değeri güncellenir.
- Bu yöntem, React'in `state` değişimlerini algılamasını sağlar.

---

### **2. `useState` ile Dizi Kullanımı**

Dizilerle çalışırken, mevcut dizi değiştirilmez; bunun yerine yeni bir dizi oluşturulup güncellenir.

#### **Örnek: Basit Bir Dizi State**

```jsx
import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Alışveriş yap", "Evi temizle"]);

  const addTodo = () => {
    setTodos([...todos, "Yeni bir görev ekle"]); // Yeni eleman eklenir
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Görev Ekle</button>
    </div>
  );
}

export default TodoList;
```

#### **Açıklama:**
- `setTodos([...todos, "Yeni bir görev ekle"])`: Mevcut dizi spread operatörüyle kopyalanır ve yeni eleman eklenir.
- Dizinin doğrudan değiştirilmesi React'in değişiklikleri algılamasını engeller.

---

### **3. Dizi ve Nesneleri Birlikte Kullanma**

Bir dizi içinde nesneleri yönetebilirsiniz. Örneğin, yapılacaklar listesi gibi bir uygulama:

#### **Örnek: Dizi İçinde Nesne State**

```jsx
import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Alışveriş yap", completed: false },
    { id: 2, text: "Evi temizle", completed: true },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Geri Al" : "Tamamla"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

#### **Açıklama:**
- `map()` yöntemi ile her bir `todo` nesnesi kontrol edilir.
- `todo.id === id` ise, nesne kopyalanır (`{ ...todo }`) ve `completed` değeri tersine çevrilir.

---

### **4. Performans İyileştirmeleri**

#### **4.1. Immer Kütüphanesi Kullanımı**
Daha temiz bir kod yapısı için [Immer](https://immerjs.github.io/immer/) kütüphanesi kullanılabilir. Immer, nesne ve dizi güncellemelerini daha kolay hale getirir.

```bash
npm install immer
```

**Örnek: Immer ile Nesne Güncelleme**
```jsx
import { useState } from "react";
import { produce } from "immer";

function UserProfile() {
  const [user, setUser] = useState({ name: "Ali", age: 25 });

  const updateName = () => {
    setUser(
      produce(user, (draft) => {
        draft.name = "Ahmet";
      })
    );
  };

  return (
    <div>
      <p>Ad: {user.name}</p>
      <button onClick={updateName}>Adı Güncelle</button>
    </div>
  );
}

export default UserProfile;
```

#### **4.2. `useReducer` Kullanımı**
Karmaşık state yönetiminde `useReducer` daha uygun olabilir. Örneğin:

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add_todo":
      return [...state, { text: action.text, completed: false }];
    case "toggle_todo":
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = () => {
    dispatch({ type: "add_todo", text: "Yeni görev" });
  };

  return (
    <div>
      <button onClick={addTodo}>Görev Ekle</button>
    </div>
  );
}

export default TodoApp;
```

---

### **5. İpuçları**

1. **Immutability Prensibi:**
   - React, `state`'in doğrudan değiştirilmesini desteklemez.
   - Yeni bir nesne veya dizi oluşturulmalıdır.

2. **Spread Operatörü Kullanımı:**
   - Nesne veya diziyi kopyalamak için spread operatörü (`...`) kullanılır.
   - Alternatif olarak `Object.assign()` kullanılabilir.

3. **`key` Prop'u Kullanın:**
   - Dizi elemanlarını render ederken, her bir elemanın benzersiz bir `key` prop'una sahip olması gerekir.

---

### **Özet**
- `useState` ile nesne ve diziler yönetilebilir, ancak değişiklikler immutability prensibine uygun yapılmalıdır.
- Spread operatörü veya `map` gibi fonksiyonlar kullanarak güvenli güncellemeler yapılır.
- Daha karmaşık yapılandırmalar için `useReducer` veya Immer gibi araçlar tercih edilebilir.