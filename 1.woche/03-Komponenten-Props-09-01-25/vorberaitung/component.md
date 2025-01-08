### **1. Was ist `Komponent` in REACT?**  
**Komponentler**, React'te kullanıcı arayüzlerini oluşturmak için kullanılan **yeniden kullanılabilir yapı taşlarıdır**. Bir komponent, HTML, CSS ve JavaScript kodlarını bir araya getirerek UI'nin bir kısmını temsil eder.

#### **Komponent Türleri**  
1. **Fonksiyonel Komponentler**  
   - React'in modern yaklaşımıdır.
   - Basit ve stateless (durumsuz) bileşenler oluşturmak için kullanılır.  
   Örnek:
   ```jsx
   function Welcome(props) {
     return <h1>Welcome, {props.name}!</h1>;
   }
   ```

2. **Class Komponentler**  
   - React'in eski ama güçlü yöntemlerinden biridir.
   - State ve lifecycle metodları içerir.  
   Örnek:
   ```jsx
   class Welcome extends React.Component {
     render() {
       return <h1>Welcome, {this.props.name}!</h1>;
     }
   }
   ```

---

### **2. Wann soll `new Komponent` erstellt werden?**  
Bir komponent oluşturmak için aşağıdaki durumlar göz önünde bulundurulabilir:

1. **Tekrar Kullanılabilir Kodlar**  
   - Aynı UI yapısını farklı yerlerde kullanıyorsanız.
   - Örneğin, bir `Button` bileşeni.

2. **UI'nin Ayrılması Gerekiyorsa**  
   - UI'nin farklı bölümlerinin ayrı ayrı yönetilmesi ve düzenlenmesi gerekiyorsa.

3. **State veya Props Yönetimi**  
   - Eğer UI'nin bir kısmı kullanıcı etkileşimleriyle değişiyorsa.

4. **Kolay Bakım ve Geliştirme**  
   - Büyük bir uygulamayı küçük, yönetilebilir parçalara bölmek istiyorsanız.

---

### **3. Was ist `Fragments`?**  
**Fragments**, React bileşenlerinde gereksiz `div` veya başka bir HTML elementi eklemeden birden fazla elemanı gruplamayı sağlar.

#### **Neden Kullanılır?**
1. DOM'a gereksiz eleman eklenmesini önler.
2. Performans artırır.

#### **Kullanımı**  
- **Klasik Kullanım:**  
  ```jsx
  <React.Fragment>
    <h1>Title</h1>
    <p>Paragraph</p>
  </React.Fragment>
  ```

- **Kısayol Kullanımı:**  
  ```jsx
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
  ```

---

### **4. Was ist `Props`?**  
**Props (properties)**, React bileşenleri arasında veri taşımak için kullanılan bir mekanizmadır.  
- **Read-Only (Salt Okunur):** Props, bileşenler içinde değiştirilemez.
- **Parent-to-Child İletişimi:** Props genellikle bir üst bileşenden alt bileşene veri göndermek için kullanılır.

#### **Örnek Kullanım**  
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="John" />;
}
```

---

### **5. `Key` Attribute während Iterationen?**  
**`Key`**, React'te bir liste render edilirken her elemanın benzersiz bir şekilde tanımlanmasını sağlar.

#### **Neden Önemlidir?**  
- React'in hangi elemanların değiştiğini anlamasına yardımcı olur.
- Performansı artırır.

#### **Kullanımı**  
```jsx
const users = [{ id: 1, name: "John" }, { id: 2, name: "Sara" }];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### **6. Was ist `REACT dev tools`?**  
React DevTools, tarayıcıda React bileşenlerini incelemek ve debug etmek için kullanılan bir geliştirici aracıdır.

#### **Özellikleri**
1. **Bileşen Hiyerarşisi Görüntüleme:**  
   Hangi bileşenin nerede olduğunu gösterir.
2. **Props ve State İzleme:**  
   Bileşenlere ait `props` ve `state` verilerini gerçek zamanlı görebilirsiniz.
3. **Performans Analizi:**  
   Uygulamanın yavaş olduğu noktaları tespit etmek için kullanılır.

---

### **7. Was ist `Conditional Rendering`?**  
React'te **conditional rendering**, bir bileşende koşullara bağlı olarak farklı içerikler göstermek için kullanılır.

#### **Örnek Kullanım**  
1. **`if-else` ile:**
   ```jsx
   function Greeting({ isLoggedIn }) {
     if (isLoggedIn) {
       return <h1>Welcome back!</h1>;
     }
     return <h1>Please log in.</h1>;
   }
   ```

2. **Ternary Operator ile:**
   ```jsx
   function Greeting({ isLoggedIn }) {
     return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
   }
   ```

3. **Logical AND (`&&`) ile:**
   ```jsx
   function Welcome({ show }) {
     return (
       <div>
         {show && <p>Special content for logged-in users.</p>}
       </div>
     );
   }
   ```

---

### **Özet**
React'teki bu temel kavramlar, modern web uygulamaları geliştirmek için gereklidir. Eğer daha fazla örneğe veya detaylı açıklamaya ihtiyacın varsa, sormaktan çekinme! 😊