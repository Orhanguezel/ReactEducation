### **Kontrolsüz Bileşenler (Uncontrolled Components)**

React'te form elemanlarının kontrol edilmesi için iki yöntem bulunur: **Kontrollü (Controlled Components)** ve **Kontrolsüz (Uncontrolled Components)** bileşenler. 

Kontrolsüz bileşenlerde, form verileri React state yerine **doğrudan DOM tarafından yönetilir**. Bu yöntem, genellikle React ve React dışı kodları birleştirirken veya hızlı ve basit çözümler gerektiğinde tercih edilir.

---

### **Kontrolsüz Bileşen Yazımı**

Kontrolsüz bir bileşen yazmak için her durum güncellemesi için bir olay dinleyicisi yazmak yerine, `ref` kullanarak DOM'dan form değerlerini alabilirsiniz.

#### **Örnek: Basit Bir Kontrolsüz Bileşen**
```jsx
import React, { createRef } from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = createRef(); // Bir ref oluştur
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Girilen isim: " + this.input.current.value); // DOM'dan değeri al
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          İsim:
          <input type="text" ref={this.input} /> {/* ref ile bağlanır */}
        </label>
        <input type="submit" value="Gönder" />
      </form>
    );
  }
}
export default NameForm;
```

**Açıklama:**
- Bu örnekte, `ref` kullanılarak doğrudan DOM üzerindeki değere erişim sağlanır.
- `this.input.current.value` ile DOM değerine ulaşılır.
- Form verileri React state yerine DOM tarafından yönetildiği için bileşen "kontrolsüz"dür.

---

### **Varsayılan Değerler (Default Values)**

React'in render döngüsünde, bir form elemanının `value` özelliği DOM'daki değeri geçersiz kılar. Ancak kontrolsüz bir bileşende, yalnızca başlangıç değeri belirtmek için `defaultValue` kullanılabilir. 

#### **Örnek: defaultValue Kullanımı**
```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    return (
      <form>
        <label>
          İsim:
          <input defaultValue="Ahmet" type="text" ref={this.input} />
        </label>
        <input type="submit" value="Gönder" />
      </form>
    );
  }
}
```

**Not:**
- `defaultValue` yalnızca ilk değer için kullanılır. Sonraki değişiklikler DOM'da kalır ve React state tarafından yönetilmez.
- `defaultChecked` (checkbox ve radio için) ve `defaultValue` (textarea ve select için) benzer şekilde çalışır.

---

### **File Input (Dosya Girişi)**

HTML'deki `<input type="file" />` elemanı, bir veya birden fazla dosyanın seçilmesine izin verir. Ancak bu tür girdiler React'te her zaman kontrolsüz bileşenlerdir. Çünkü dosya değeri yalnızca kullanıcı tarafından ayarlanabilir ve programlama yoluyla değiştirilemez.

#### **Örnek: File Input Kullanımı**
```jsx
import React, { createRef } from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = createRef(); // File input için ref oluştur
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Seçilen dosya: ${this.fileInput.current.files[0].name}` // İlk dosyanın adını al
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Dosya yükle:
          <input type="file" ref={this.fileInput} />
        </label>
        <button type="submit">Gönder</button>
      </form>
    );
  }
}
export default FileInput;
```

**Açıklama:**
- `this.fileInput.current.files` kullanılarak seçilen dosyalar bir liste olarak alınır.
- Bu yöntemle, yüklenen dosyalar üzerinde işlem yapılabilir.

---

### **Kontrolsüz Bileşenler Ne Zaman Kullanılır?**

- **Hızlı ve Basit Uygulamalar:** Eğer form state'ini yönetmek istemiyorsanız, kontrolsüz bileşenler daha az kod gerektirir.
- **React ve React Dışı Kod Entegrasyonu:** React dışı kütüphanelerle birlikte çalışırken DOM tabanlı veri yönetimi daha kolay olabilir.
- **Dosya Girişi:** Dosya girişleri zaten kontrolsüz olduğu için bu tür durumlarda tercih edilir.

---

### **Kontrollü ve Kontrolsüz Bileşenlerin Karşılaştırılması**

| Özellik                   | Kontrollü Bileşen                      | Kontrolsüz Bileşen                  |
|---------------------------|----------------------------------------|-------------------------------------|
| **Veri Yönetimi**         | React state ile                       | DOM ile                            |
| **Kod Miktarı**           | Daha fazla                            | Daha az                            |
| **Kullanım Kolaylığı**    | Karmaşık uygulamalar için uygun        | Basit uygulamalar için uygun       |
| **Esneklik**              | React içinde tüm kontrol sizde         | DOM'a bağımlı                       |
| **Dosya Girişi**          | Zor (manipülasyon için `useState` gerekir) | Doğrudan kullanılabilir           |

---

### **Sonuç**

Kontrolsüz bileşenler, özellikle basit formlar ve React dışı kodlarla entegrasyon için ideal bir seçenektir. Ancak, karmaşık ve yönetilebilir bir yapı gerekiyorsa, kontrollü bileşenler tercih edilmelidir. Kontrolsüz bileşenlerde `ref` kullanımı ile DOM'dan doğrudan veri alınabilir. 

Daha fazla örnekle konuyu genişletebilirim! 😊