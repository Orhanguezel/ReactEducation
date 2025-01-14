### Detaylı Bilgi: State, useState Hook ve Event Handling

---

### 1. **Was ist `state` in React?**
`State`, bir React bileşeninde dinamik olarak değişen verilerdir. Bileşenlerin içsel veri durumlarını tutmasını ve bu verilere bağlı olarak yeniden render edilmesini sağlar.  
**Özellikleri:**
- React bileşenlerinin güncellenmesini sağlar.
- Sadece sınıf veya fonksiyon bileşenlerinde kullanılır.
- Her değişiklikte bileşen yeniden render edilir.

#### Örnek:
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <h1>Count: {count}</h1>;
}
```

---

### 2. **Wie aktualisieren wir den `State`?**
State’i güncellemek için React bize bir "setter" fonksiyonu sağlar. Bu fonksiyon, React’e state’in değiştiğini söyler ve bileşeni yeniden render eder.

#### Güncelleme Yöntemi:
- `setState` veya `setCount` gibi bir setter kullanılır.
- State’i direkt değiştirmek (örn. `state = newState`) yanlış bir yöntemdir.

#### Örnek:
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return <button onClick={increase}>Click me: {count}</button>;
}
```

---

### 3. **Was ist passiert, wenn ein `state` geändert wird?**
- State değiştiğinde, React bileşeni yeniden render eder.
- React, sanal DOM’u günceller ve yalnızca değişiklik yapılan kısmı gerçek DOM’da yansıtır.
- Performansı optimize eder.

#### Örnek:
```jsx
const [text, setText] = useState("Hello");
const handleChange = () => setText("Goodbye");
```
`setText` çağrıldığında, yalnızca `text` değişkenine bağlı olan bileşen kısımları yenilenir.

---

### 4. **`useState` mit Objekte und Arrays?**
`useState` sadece string veya sayı değil, aynı zamanda **objeler** ve **diziler** için de kullanılabilir. Ancak, güncelleme sırasında eski state'i korumak için dikkatli olunmalıdır.

#### Örnek (Objelerle):
```jsx
const [user, setUser] = useState({ name: "John", age: 25 });

const updateName = () => {
  setUser({ ...user, name: "Doe" }); // Eski state'i korumak için spread operatörü
};
```

#### Örnek (Dizilerle):
```jsx
const [items, setItems] = useState([1, 2, 3]);

const addItem = () => {
  setItems([...items, 4]); // Mevcut listeyi koruyarak yeni bir öğe ekleme
};
```

---

### 5. **Events in React**
React'te olaylar (events), DOM öğeleriyle kullanıcı etkileşimlerini yönetir. Örneğin, tıklama, klavye veya fare olayları gibi.

#### Önemli Noktalar:
- React event isimleri camelCase (örneğin, `onClick`) olarak yazılır.
- Event fonksiyonları bir JSX öğesine atanır.
- Event handler fonksiyonları genellikle anonim fonksiyonlar olarak tanımlanır.

#### Örnek:
```jsx
function Button() {
  const handleClick = () => alert("Button clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}
```

---

### 6. **React `event` Objekt**
React, DOM event'lerine benzer şekilde özel bir `SyntheticEvent` nesnesi sağlar. Bu, performansı optimize edilmiş ve tüm tarayıcılarla uyumlu bir olay sistemidir.

#### Örnek:
```jsx
function InputField() {
  const handleChange = (event) => {
    console.log(event.target.value); // Kullanıcı girişini yakalar
  };

  return <input type="text" onChange={handleChange} />;
}
```

#### `event` Nesnesi Özellikleri:
- **`event.target`**: Olayın tetiklendiği öğeyi temsil eder.
- **`event.preventDefault()`**: Varsayılan tarayıcı davranışını durdurur.
- **`event.stopPropagation()`**: Event'in bir üst öğeye yayılmasını engeller.

---

### Resources (Kaynaklar):
- [React State and Lifecycle](https://react.dev/learn/state)
- [useState Documentation](https://react.dev/reference/react/useState)
- [Handling Events](https://react.dev/learn/responding-to-events)

---

### Tasks Çözümü:
Bu konularda deneyim kazanmak için aşağıdaki görevleri yapabilirsiniz:
1. Bir sayaç (counter) bileşeni yapın.
2. Bir metin giriş alanı ve o metni ekrana yazdıran bir bileşen oluşturun.
3. Bir listeye öğe ekleyen bir `useState` uygulaması yapın.