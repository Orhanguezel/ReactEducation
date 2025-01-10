### **React: Components ve Props (Bileşenler ve Özellikler)**

React'te **bileşenler (components)**, kullanıcı arayüzlerini oluşturan **yeniden kullanılabilir yapı taşlarıdır**. Bu bileşenler, JavaScript fonksiyonları gibi davranır: Veri (props) alır ve bir React elementi döndürerek ekranda gösterilecek içeriği tanımlar.

---

## **1. Component (Bileşen) Nedir?**

Bileşenler, React'in temel yapı taşlarıdır ve kullanıcı arayüzlerini bağımsız, yeniden kullanılabilir parçalara ayırmanıza olanak tanır. Bu parçalar bir sayfa içindeki düğme, form, kart veya tüm bir sayfa olabilir.

### **Fonksiyonel ve Sınıf Bileşenler**

#### **a) Fonksiyonel Bileşen**
En basit bileşen türü, bir JavaScript fonksiyonu olarak tanımlanır:
```jsx
function Welcome(props) {
  return <h1>Merhaba, {props.name}!</h1>;
}
```
- Bu, bir "Fonksiyon Bileşeni"dir çünkü bir fonksiyon gibi çalışır.
- `props` (özellikler), bileşene dışarıdan veri taşımak için kullanılır.

#### **b) Sınıf Bileşen**
React'te sınıf tabanlı bileşenler de kullanılabilir:
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Merhaba, {this.props.name}!</h1>;
  }
}
```
- Sınıf bileşenleri, daha önceki React sürümlerinde daha fazla özellik içeriyordu. Ancak React 16.8'den itibaren fonksiyon bileşenleri `Hooks` sayesinde daha popüler hale geldi.

---

## **2. Bir Component (Bileşen) Ne Zaman Oluşturulmalıdır?**

1. **Yeniden Kullanılabilirlik:**
   - Eğer bir UI parçasını birden fazla yerde kullanacaksanız, bunu bir bileşene dönüştürmek mantıklıdır. Örneğin, bir "Düğme" bileşeni:
     ```jsx
     function Button(props) {
       return <button>{props.label}</button>;
     }
     ```

2. **UI'yi Modüler Hale Getirme:**
   - Karmaşık bir arayüzü küçük parçalara bölmek, bakımı kolaylaştırır. Örneğin, bir "Yorum" bileşeni:
     ```jsx
     function Comment(props) {
       return (
         <div>
           <h3>{props.author}</h3>
           <p>{props.text}</p>
         </div>
       );
     }
     ```

3. **State veya Props Yönetimi:**
   - UI'nin bazı bölümleri dinamik olarak değişiyorsa, bu kısım bir bileşen olarak ayrılabilir.

---

## **3. Props (Özellikler) Nedir?**

**Props (Properties)**, bileşenler arasında veri iletmek için kullanılan bir mekanizmadır. Props, bir bileşene dışarıdan veri gönderilmesini sağlar.

### **Özellikleri**
1. **Salt Okunur (Read-Only):**
   - Props içindeki veriler değiştirilemez.
   - Örneğin:
     ```jsx
     function Welcome(props) {
       props.name = "Başka İsim"; // Hata!
       return <h1>Merhaba, {props.name}</h1>;
     }
     ```

2. **Parent-to-Child İletişimi:**
   - Props, bir bileşenden (parent) alt bileşene (child) veri taşır.
   - Örnek:
     ```jsx
     function App() {
       return <Welcome name="Ahmet" />;
     }

     function Welcome(props) {
       return <h1>Merhaba, {props.name}!</h1>;
     }
     ```

---

## **4. React Bileşenleri Nasıl Render Edilir?**

React'te bir bileşen, DOM üzerinde bir HTML elementi olarak gösterilir. Örneğin:

### **Örnek: Basit Bir Render İşlemi**
```jsx
function Welcome(props) {
  return <h1>Merhaba, {props.name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome name="Ayşe" />);
```

### **Neler Oluyor?**
1. **`root.render()` Çağrılır:**
   - `<Welcome name="Ayşe" />` elementi render edilir.
2. **React `Welcome` Bileşenini Çağırır:**
   - Bileşene `{name: 'Ayşe'}` şeklinde `props` gönderilir.
3. **Bileşen Bir React Elementi Döndürür:**
   - `<h1>Merhaba, Ayşe!</h1>`.
4. **React DOM Güncellenir:**
   - DOM, bileşen çıktısına göre güncellenir.

---

## **5. Bileşenlerin Birleştirilmesi (Composing Components)**

Bileşenler diğer bileşenleri render edebilir. Örneğin:

```jsx
function Welcome(props) {
  return <h1>Merhaba, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Ali" />
      <Welcome name="Veli" />
      <Welcome name="Ayşe" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### **Örnek: Yorum Bileşeni**
Daha büyük bir bileşeni daha küçük bileşenlere ayırabiliriz:
```jsx
function Avatar(props) {
  return <img src={props.user.avatarUrl} alt={props.user.name} />;
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}
```

---

## **6. Props Neden Salt Okunur?**

React'teki bileşenler **pure functions (saf fonksiyonlar)** gibi davranmalıdır. Yani, aynı giriş için aynı çıktıyı üretmelidir.

### **Props'un Salt Okunur Olması**
Bu, bileşenlerin tahmin edilebilir ve test edilebilir olmasını sağlar. Eğer `props` değiştirilebilirse, uygulama karmaşık ve hataya açık hale gelir.

---

### **Özet: React'te Bileşenler ve Props**
- **Bileşenler:** UI parçalarını oluşturur ve yeniden kullanılabilir hale getirir.
- **Props:** Bileşenlere dışarıdan veri taşır ve salt okunur.
- **Pure Functions:** Bileşenler, props'lara göre tahmin edilebilir bir çıktı döndürmelidir.

Soruların veya daha fazla örnek isteğin olursa sormaktan çekinme! 😊