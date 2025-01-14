### **React'te `State` Güncelleme**

React'te **state**, bir bileşenin (component) dinamik olarak değişebilen veri kaynağıdır. State'i güncellemek, bir bileşenin görünümünü veya davranışını kullanıcı etkileşimleri, API çağrıları veya diğer olaylara göre yeniden render etmesini sağlar. Ancak, React'te state'in doğru ve verimli bir şekilde güncellenmesi için belirli kurallara uyulması gerekir.

---

### **State Güncellerken Temel İlkeler**

1. **State'i Doğrudan Değiştirme:**
   - React'te state **doğrudan** değiştirilemez.
   - Yanlış kullanım:
     ```jsx
     this.state.count = 5; // Yanlış, React bu değişikliği algılamaz.
     ```

   - Doğru kullanım:
     ```jsx
     this.setState({ count: 5 }); // React bu değişikliği algılar ve yeniden render eder.
     ```

2. **State Güncellemeleri Asenkron Çalışır:**
   - React, performansı artırmak için state güncellemelerini topluca işler (batching). Bu nedenle, bir state güncellemesinin hemen etkisini göremeyebilirsiniz.
   - Eğer bir state güncellemesine bağlı işlem yapmak istiyorsanız, bir callback veya `useEffect` kullanabilirsiniz.

3. **Güncellemeler `setState` veya `useState` Fonksiyonu ile Yapılır:**
   - Fonksiyonel bileşenlerde: `setState` veya `setX` fonksiyonu kullanılır.
   - Sınıf bileşenlerinde: `this.setState` kullanılır.

---

### **Fonksiyonel Bileşenlerde State Güncelleme**

Fonksiyonel bileşenlerde React Hooks kullanılarak state yönetilir. En sık kullanılan hooklardan biri **`useState`**'dir.

#### **Basit Bir Örnek:**
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Başlangıç state: 0

  const increment = () => {
    setCount(count + 1); // State güncellenir
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Sayaç: {count}</p>
      <button onClick={increment}>Arttır</button>
      <button onClick={decrement}>Azalt</button>
    </div>
  );
}

export default Counter;
```

**Açıklama:**
- `useState` başlangıç state değerini ayarlamak için kullanılır.
- `setCount` fonksiyonu, state'i güncellemek için çağrılır.

---

### **Sınıf Bileşenlerinde State Güncelleme**

Sınıf bileşenlerinde, state `this.state` ile tanımlanır ve `this.setState` ile güncellenir.

#### **Basit Bir Örnek:**
```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Başlangıç state
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // State güncellemesi
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <p>Sayaç: {this.state.count}</p>
        <button onClick={this.increment}>Arttır</button>
        <button onClick={this.decrement}>Azalt</button>
      </div>
    );
  }
}

export default Counter;
```

**Açıklama:**
- `this.state` ile state başlangıç değeri belirlenir.
- `this.setState` ile state güncellenir.

---

### **State Güncellerken Dikkat Edilmesi Gerekenler**

#### **1. Önceki State'e Bağlı Güncelleme:**
State güncellemesi yapılırken mevcut state'e bağlı bir işlem gerekiyorsa, `setState` veya `setX` fonksiyonuna bir callback fonksiyonu verilmelidir.

**Yanlış Kullanım:**
```jsx
setCount(count + 1); // Bu, eski state değerine bağlı olabilir.
```

**Doğru Kullanım:**
```jsx
setCount((prevCount) => prevCount + 1); // Her zaman güncel state değeri kullanılır.
```

**Örnek:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const incrementByTwo = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1); // Art arda iki güncelleme
  };

  return (
    <div>
      <p>Sayaç: {count}</p>
      <button onClick={incrementByTwo}>2 Arttır</button>
    </div>
  );
}
```

---

#### **2. State Nesnelerini Güncelleme:**
Eğer state bir nesne (object) ise, state'i güncellerken mevcut state'i korumak için `...spread` operatörü kullanılmalıdır.

**Örnek:**
```jsx
function UserProfile() {
  const [user, setUser] = useState({ name: "Ahmet", age: 25 });

  const updateName = () => {
    setUser((prevUser) => ({
      ...prevUser, // Mevcut state korunur
      name: "Mehmet",
    }));
  };

  return (
    <div>
      <p>Ad: {user.name}</p>
      <p>Yaş: {user.age}</p>
      <button onClick={updateName}>Adı Güncelle</button>
    </div>
  );
}
```

---

#### **3. Birden Fazla State Yönetimi:**
Bir bileşende birden fazla state kullanılabilir. Her biri bağımsız olarak güncellenir.

**Örnek:**
```jsx
function MultiStateExample() {
  const [name, setName] = useState("Ayşe");
  const [age, setAge] = useState(30);

  return (
    <div>
      <p>Ad: {name}</p>
      <p>Yaş: {age}</p>
      <button onClick={() => setName("Fatma")}>Adı Güncelle</button>
      <button onClick={() => setAge(age + 1)}>Yaşı Arttır</button>
    </div>
  );
}
```

---

### **Asenkron State Güncellemeleri**

React, performansı optimize etmek için state güncellemelerini topluca işler. Bu, bir state güncellemesinin hemen gerçekleşmediği anlamına gelir.

**Örnek:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("Güncel Count:", count); // Eski değeri gösterir
  };

  return <button onClick={increment}>Sayaç: {count}</button>;
}
```

**Çözüm: `useEffect` Kullanımı**
```jsx
useEffect(() => {
  console.log("State güncellendi:", count);
}, [count]);
```

---

### **State Güncellemeleri ile Şartlı Render**

State, bileşenin görünümünü şartlı olarak değiştirmek için kullanılabilir.

**Örnek:**
```jsx
function LoginStatus() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <p>Hoşgeldiniz!</p> : <p>Lütfen giriş yapın.</p>}
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Çıkış Yap" : "Giriş Yap"}
      </button>
    </div>
  );
}
```

---

### **Sonuç**
- React'te state güncellemesi `setState` veya `setX` gibi fonksiyonlarla yapılır.
- Güncelleme sırasında önceki state değerine dikkat edilmeli ve gerekirse callback kullanılmalıdır.
- Nesneler veya diziler güncellenirken mevcut state korunmalıdır.
- React'in asenkron güncellemeleri nedeniyle, state değişikliklerinden sonra etkileri görmek için `useEffect` kullanılabilir.
- State, kullanıcı etkileşimlerine ve olaylara duyarlı, dinamik uygulamalar oluşturmanın temelidir.