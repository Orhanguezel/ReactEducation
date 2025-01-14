### **React'te `State` Değiştiğinde Ne Olur?**

React'te bir bileşenin (component) `state` değeri değiştiğinde, bu durum bileşenin yeniden render edilmesini (yeniden çizilmesini) tetikler. Ancak, bu süreç sadece değişen `state` veya `props` değerinin etkilendiği kısımlarda gerçekleşir. React, "Virtual DOM" (Sanal DOM) sayesinde performansı optimize ederek sadece gerekli güncellemeleri yapar.

---

### **1. State Değişikliğinin Süreci**

Bir `state` değişikliği şu adımları izler:

#### **1.1. `setState` veya `useState` Kullanılır:**
- `state` güncellemesi yapılır.
- Örneğin:
  ```jsx
  setCount(count + 1);
  ```

#### **1.2. React Sanal DOM'u Günceller:**
- React, mevcut Sanal DOM ile yeni Sanal DOM'u karşılaştırır. Bu süreçte `Diffing Algorithm` kullanılır.
- Sadece değişen bileşen veya elementlerin belirlenmesi sağlanır.

#### **1.3. React Gerekli Kısımları Yeniden Çizer:**
- React, `Reconciliation` (Uzlaştırma) süreciyle, sadece değişen DOM düğümlerini günceller.
- Bu sayede performans artışı sağlanır.

#### **1.4. Yeni UI Kullanıcıya Gösterilir:**
- React, güncellenmiş bileşeni tarayıcıda (Real DOM) görüntüler.
- Kullanıcı bu değişikliği hemen görür.

---

### **2. State Değişiminin Örnek Süreci**

Bir sayaç (counter) uygulamasında `state` değişikliğini inceleyelim:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // State güncellemesi yapılır
  };

  return (
    <div>
      <p>Sayaç: {count}</p> {/* State değişikliği bu kısmı etkiler */}
      <button onClick={increment}>Arttır</button>
    </div>
  );
}

export default Counter;
```

#### **State Değişim Süreci:**
1. **Kullanıcı Butona Tıkladı:**
   - `increment` fonksiyonu çağrılır ve `setCount` ile `count` değeri artırılır.

2. **React Sanal DOM'u Güncelledi:**
   - `count` değiştiği için, React yeni bir Sanal DOM oluşturur ve eski Sanal DOM ile karşılaştırır.

3. **Sadece Gerekli Güncellemeler Yapıldı:**
   - `p` etiketi içindeki `Sayaç: {count}` kısmı yeniden render edilir.
   - `button` etiketi gibi değişmeyen kısımlar yeniden çizilmez.

4. **Tarayıcıdaki Gerçek DOM Güncellendi:**
   - Yeni değer tarayıcıya yansıtılır ve kullanıcı güncellenmiş sayaç değerini görür.

---

### **3. Performans ve Optimizasyon**

#### **3.1. React'in Performans Artırıcı Mekanizmaları**
- **Sanal DOM (Virtual DOM):** React, gerçek DOM ile çalışmak yerine, hafif bir Sanal DOM kullanır. Bu, gereksiz DOM manipülasyonlarını önler.
- **Diffing Algorithm:** React, eski ve yeni Sanal DOM'u karşılaştırarak yalnızca değişiklik olan kısımları bulur.
- **Reconciliation:** Sadece değişen kısımlar gerçek DOM'a yansıtılır.

#### **3.2. State'in Minimal Tutulması:**
- Sadece gerekli olan veriler `state` olarak tutulmalı.
- Örneğin:
  Yanlış:
  ```jsx
  const [fullName, setFullName] = useState({ firstName: "John", lastName: "Doe" });
  ```
  Doğru:
  ```jsx
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  ```

---

### **4. State Değişimlerinin Bazı Özellikleri**

#### **4.1. State Değişikliği Asenkron Çalışır:**
React, performansı artırmak için state güncellemelerini topluca işler (batching). Bu nedenle bir state değişikliği hemen etkisini göstermeyebilir.

**Örnek:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Count:", count); // Eski değeri yazdırır
  };

  return <button onClick={handleClick}>Sayaç: {count}</button>;
}
```

**Çözüm:**
`useEffect` ile değişiklik sonrası işlemleri izlemek.
```jsx
useEffect(() => {
  console.log("Count güncellendi:", count);
}, [count]);
```

---

#### **4.2. State Değişikliği Şartlı Render Tetikler:**
State değişiklikleri, bileşenin yeniden render edilmesine neden olur. Şartlı render işlemleri bu sayede çalışır.

**Örnek:**
```jsx
function LoginStatus() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <p>Hoş geldiniz!</p> : <p>Lütfen giriş yapın.</p>}
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Çıkış Yap" : "Giriş Yap"}
      </button>
    </div>
  );
}
```

- `loggedIn` state değiştiğinde, React doğru içeriği render eder.

---

### **5. Özet**

React'te `state` değişikliği şu sonuçları doğurur:
1. **Sanal DOM Güncellenir:** React, state değişikliğine bağlı olarak yeni bir Sanal DOM oluşturur.
2. **Diffing ve Reconciliation İşlemleri:** React, değişen kısımları bulur ve sadece gerekli kısımları gerçek DOM'a yansıtır.
3. **Tarayıcıya Güncelleme Yansır:** Kullanıcı güncellenmiş içeriği hemen görür.

**React'in Avantajları:**
- Gereksiz DOM manipülasyonları önlenir.
- Performans artırılır.
- State yönetimi, dinamik kullanıcı arayüzleri oluşturmayı kolaylaştırır.