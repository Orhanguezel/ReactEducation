### React'te Formların Kullanımı: Kontrollü ve Kontrolsüz Bileşenler

Formlar, HTML'deki gibi React uygulamalarında da kullanılır, ancak React form elemanlarının yönetimi konusunda daha fazla kontrol ve esneklik sunar. React'te formlar genellikle **kontrollü bileşenler** olarak ele alınır. Bu yöntem, formun durumunu React state'e bağlayarak tüm veri akışını yönetmeyi sağlar. Ancak bazı durumlarda **kontrolsüz bileşenler** de kullanılabilir.

---

## **1. HTML'de Formlar**
HTML formlarında, form elemanları kendi durumlarını (state) doğal olarak saklar. Örneğin:

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

- Bu tür bir form, varsayılan olarak form verilerini tarayıcı üzerinden gönderir ve sayfayı yeniler.
- React'te bu davranışı koruyabilirsiniz, ancak genellikle form verilerini JavaScript ile yönetmek daha kullanışlıdır.

---

## **2. Kontrollü Bileşenler**

### Tanım:
React'te bir form elemanının değerinin React state tarafından tamamen kontrol edildiği duruma **kontrollü bileşen** denir. Bu sayede React, form elemanının "gerçeğin tek kaynağı" (**single source of truth**) haline gelir.

### Örnek: Kontrollü `<input>` Kullanımı
```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }; // State tanımlandı

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }); // State güncelleniyor
  }

  handleSubmit(event) {
    alert('Submitted name: ' + this.state.value);
    event.preventDefault(); // Sayfa yenilemesi engelleniyor
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value} // State'e bağlı
            onChange={this.handleChange} // Değişiklikleri yakala
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

#### Nasıl Çalışır?
- **State:** Formun başlangıç değeri `this.state.value` ile ayarlanır.
- **`onChange`:** Her değişiklikte kullanıcı girdisi yakalanır ve `state` güncellenir.
- **`value`:** Form elemanının değeri React state'den alınır, bu da React state'i form elemanının tek bilgi kaynağı haline getirir.

---

### **Textarea Tag**
HTML'de `<textarea>` içeriği doğrudan tag'in içine yazılır:
```html
<textarea>
  Bu bir metin alanıdır.
</textarea>
```

React'te ise `<textarea>` elemanının içeriği `value` özelliğiyle kontrol edilir. Örnek:

```jsx
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Bu bir React textarea örneğidir.',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Essay submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea
            value={this.state.value} // State'e bağlı
            onChange={this.handleChange} // Kullanıcı girdisini yakala
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

---

### **Select Tag**
HTML'deki `<select>` elemanı, birden fazla seçenek arasından seçim yapmak için kullanılır:
```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
</select>
```
React'te `selected` yerine `value` kullanılır:
```jsx
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Favorite flavor: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select
            value={this.state.value} // State'e bağlı
            onChange={this.handleChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

---

## **3. Birden Fazla Giriş Elemanı Yönetimi**
Bir formda birden fazla alan olduğunda, her biri için bir `onChange` işleyici yazmak yerine tek bir işleyici kullanabilirsiniz.

#### Örnek:
```jsx
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value, // Dinamik state güncellemesi
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
```

#### Dinamik State Güncellemesi:
- ES6'daki **Computed Property Names** kullanımıyla, hangi giriş elemanının güncellendiğini belirleyebilir ve ilgili state değerini güncelleyebilirsiniz.

---

## **4. Kontrollü Bileşenlerin Alternatifleri**
Kontrollü bileşenlerin kod miktarını artırdığı durumlarda, **kontrolsüz bileşenler** veya form yönetim kütüphaneleri kullanılabilir.

### **Kontrolsüz Bileşenler**
Kontrolsüz bileşenlerde, form verisi doğrudan DOM'dan okunur (örn. `ref` ile).

### **Formik ve Diğer Kütüphaneler**
Formik gibi kütüphaneler, state yönetimi, doğrulama ve form gönderim işlemlerini kolaylaştırır.

---

## **Özet**
- Kontrollü bileşenler, React state kullanarak form elemanlarını tam kontrol etmeyi sağlar.
- `value` ve `onChange` özellikleriyle React state, form elemanlarının tek bilgi kaynağı haline gelir.
- Daha dinamik ve ölçeklenebilir formlar için kontrollü bileşenler tercih edilir.
- Daha basit durumlar için kontrolsüz bileşenler veya Formik gibi kütüphaneler kullanılabilir.

Herhangi bir sorunuz varsa, detaylı açıklama yapabilirim! 😊