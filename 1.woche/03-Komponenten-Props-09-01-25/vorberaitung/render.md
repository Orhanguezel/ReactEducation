### React'te Koşullu Render Etme (Conditional Rendering)

React uygulamalarında bileşenlerin belirli koşullara göre farklı içerikler göstermesi gerekebilir. Koşullu render, React bileşenlerinde **JavaScript'in kontrol akışı** (if, ternary operator, &&) kullanılarak gerçekleştirilir.

---

### **1. JSX’i Koşullu Olarak Döndürmek**
Bir bileşen, farklı bir **JSX yapısını** belirli bir koşula göre döndürebilir.

#### **Örnek:**
Bir paketleme listesi uygulaması olsun. `Item` bileşeni bir öğe alır ve öğenin paketlenip paketlenmediğini belirtir.

```jsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride'ın Paketleme Listesi</h1>
      <ul>
        <Item isPacked={true} name="Uzay Elbisesi" />
        <Item isPacked={true} name="Altın Yapraklı Miğfer" />
        <Item isPacked={false} name="Fotoğraf Albümü" />
      </ul>
    </section>
  );
}
```

#### **Sonuç (Tarayıcıda):**
```html
<section>
  <h1>Sally Ride'ın Paketleme Listesi</h1>
  <ul>
    <li class="item">Uzay Elbisesi ✅</li>
    <li class="item">Altın Yapraklı Miğfer ✅</li>
    <li class="item">Fotoğraf Albümü</li>
  </ul>
</section>
```

---

### **2. Hiçbir Şey Döndürmemek**
Bazen belirli koşullarda bileşenin hiçbir şey döndürmemesi istenebilir. Bu durumda bileşen `null` döndürebilir.

#### **Örnek:**
Paketlenmiş öğeleri listelememek:
```jsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride'ın Paketleme Listesi</h1>
      <ul>
        <Item isPacked={true} name="Uzay Elbisesi" />
        <Item isPacked={true} name="Altın Yapraklı Miğfer" />
        <Item isPacked={false} name="Fotoğraf Albümü" />
      </ul>
    </section>
  );
}
```

#### **Sonuç (Tarayıcıda):**
```html
<section>
  <h1>Sally Ride'ın Paketleme Listesi</h1>
  <ul>
    <li class="item">Fotoğraf Albümü</li>
  </ul>
</section>
```

---

### **3. Ternary Operatörü ile Koşullu Render**
Koşulları daha kısa yazmak için **ternary operator** (`? :`) kullanılabilir.

#### **Örnek:**
```jsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? name + " ✅" : name}
    </li>
  );
}
```

#### **Sonuç:**
Eğer `isPacked` doğruysa (`true`), öğe isminin yanında bir ✅ simgesi gösterir. Aksi takdirde sadece isim görüntülenir.

---

### **4. Mantıksal VE (&&) Operatörü ile Render**
Eğer yalnızca belirli bir koşul doğruysa bir şey döndürmek istiyorsanız, **&& operatörü** kullanabilirsiniz.

#### **Örnek:**
```jsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✅"}
    </li>
  );
}
```

#### **Sonuç:**
Eğer `isPacked` doğruysa, öğenin yanında ✅ gösterilir. Yanlışsa, hiçbir şey gösterilmez.

---

### **5. JSX'i Bir Değişkene Atama**
Daha karmaşık koşullar için, JSX’i bir değişkene atayabilirsiniz.

#### **Örnek:**
```jsx
function Item({ name, isPacked }) {
  let itemContent = name;

  if (isPacked) {
    itemContent = name + " ✅";
  }

  return (
    <li className="item">
      {itemContent}
    </li>
  );
}
```

Bu yöntem, JSX’inizi daha düzenli tutar ve daha sonra değişkeni JSX içinde kullanmanızı sağlar.

---

### **6. Karmaşık Yapılar için Değişkenlerle JSX**
Eğer koşula göre **HTML yapısı** değiştirilecekse, değişkene JSX atanabilir.

#### **Örnek:**
Paketlenmiş öğeleri üstü çizili göstermek:
```jsx
function Item({ name, isPacked }) {
  let itemContent = name;

  if (isPacked) {
    itemContent = (
      <del>
        {name} ✅
      </del>
    );
  }

  return (
    <li className="item">
      {itemContent}
    </li>
  );
}
```

#### **Sonuç:**
Eğer `isPacked` doğruysa, öğenin üstü çizilir ve yanında ✅ gösterilir.

---

### **7. Kullanım Özetleri**
- **If ile koşul:** JSX’i kontrol etmek için temel yapı.
- **Ternary Operatör (`? :`):** Kısa ve okunabilir bir yol.
- **Mantıksal VE (`&&`):** Sadece bir koşul doğruysa JSX döndürmek.
- **JSX’i değişkene atama:** Karmaşık durumlarda düzenli bir yapı.

---

### **8. Örnek: Tüm Yöntemlerin Kullanımı**
```jsx
function Item({ name, isPacked }) {
  let itemContent = name;

  if (isPacked) {
    itemContent = (
      <del>
        {name} ✅
      </del>
    );
  }

  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride'ın Paketleme Listesi</h1>
      <ul>
        <Item isPacked={true} name="Uzay Elbisesi" />
        <Item isPacked={true} name="Altın Yapraklı Miğfer" />
        <Item isPacked={false} name="Fotoğraf Albümü" />
      </ul>
    </section>
  );
}
```

#### **Sonuç (Tarayıcıda):**
```html
<section>
  <h1>Sally Ride'ın Paketleme Listesi</h1>
  <ul>
    <li class="item"><del>Uzay Elbisesi ✅</del></li>
    <li class="item"><del>Altın Yapraklı Miğfer ✅</del></li>
    <li class="item">Fotoğraf Albümü</li>
  </ul>
</section>
```

---

### **Özet**
- React’te koşullu render JavaScript kontrolleri ile yapılır.
- `if`, `? :` ve `&&` gibi yapıların kullanımı yaygındır.
- Daha karmaşık yapılar için değişkenlerle JSX düzenlenebilir.
- Temiz kod için mantıklı yapıları tercih edin ve gerektiğinde bileşenleri ayırarak kodu modüler hale getirin.