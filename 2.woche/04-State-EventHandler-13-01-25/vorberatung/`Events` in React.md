### **React'te Event (Olay) Objesi**

React'te olay işleyicileri (event handlers) kullanıldığında, olayın detaylarını içeren bir **`event`** objesi olay işleyicisine otomatik olarak iletilir. Bu obje, tarayıcıların yerel DOM olay nesnesini saran ve React'in sağladığı bir **`SyntheticEvent`** nesnesidir.

React, `SyntheticEvent` ile çalışarak çapraz tarayıcı uyumluluğu sağlar ve performansı optimize eder. React'in bu sentezlenmiş olay sistemi, tüm tarayıcılarda aynı şekilde çalışır.

---

### **1. `SyntheticEvent` Nedir?**

- **`SyntheticEvent`**, tarayıcının yerel olay nesnesini taklit eden bir React nesnesidir.
- Native DOM `event` nesnesiyle aynı API'yi sunar, ancak React tarafından optimize edilmiş ve genişletilmiştir.
- Tüm olaylar, React'in `SyntheticEvent` sisteminde işlenir.
- React olay işleyicisi tamamlandıktan sonra bu nesne **geri dönüşüm için temizlenir (pooled)**. Bu nedenle, olaya ait verilere daha sonra erişmek istiyorsanız, bu bilgileri kopyalamanız gerekir.

---

### **2. `event` Nesnesinin Özellikleri**

React `event` nesnesi, tarayıcının yerel `event` nesnesindeki özelliklerin çoğunu sağlar. Bazı önemli özellikler:

| Özellik              | Açıklama                                                     |
|----------------------|-------------------------------------------------------------|
| `event.type`         | Olayın türünü döndürür (örneğin, `click`, `keydown`).       |
| `event.target`       | Olayı tetikleyen öğeyi döndürür.                            |
| `event.currentTarget`| Olay işleyicisinin bağlı olduğu öğeyi döndürür.             |
| `event.preventDefault()` | Varsayılan tarayıcı davranışını engeller.                 |
| `event.stopPropagation()` | Olayın yukarı doğru yayılmasını engeller.                |
| `event.nativeEvent`  | Orijinal tarayıcı `event` nesnesine erişim sağlar.          |
| `event.bubbles`      | Olayın kabarcıklanıp kabarcıklanmadığını belirtir.          |
| `event.clientX` ve `event.clientY` | Fare olayları için tıklama konumunu döndürür.      |

---

### **3. `event` Objesinin Kullanımı**

#### **3.1. Temel Kullanım**

Bir olay işleyicisi, `event` objesini otomatik olarak alır.

```jsx
import React from "react";

function EventExample() {
  const handleClick = (event) => {
    console.log("Olay türü:", event.type); // "click"
    console.log("Tıklanan öğe:", event.target); // <button>
  };

  return <button onClick={handleClick}>Tıkla!</button>;
}

export default EventExample;
```

---

#### **3.2. `preventDefault` Kullanımı**

Tarayıcının varsayılan davranışını engellemek için `event.preventDefault()` kullanılır.

```jsx
import React from "react";

function FormExample() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Formun varsayılan gönderim işlemini engeller
    alert("Form gönderimi engellendi!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Adınızı girin" />
      <button type="submit">Gönder</button>
    </form>
  );
}

export default FormExample;
```

---

#### **3.3. `stopPropagation` Kullanımı**

Bir olayın diğer öğelere yayılmasını durdurmak için `event.stopPropagation()` kullanılır.

```jsx
import React from "react";

function StopPropagationExample() {
  const handleOuterClick = () => {
    console.log("Dış div tıklandı.");
  };

  const handleInnerClick = (event) => {
    event.stopPropagation(); // Olayın dış div'e yayılmasını engeller
    console.log("İç div tıklandı.");
  };

  return (
    <div onClick={handleOuterClick}>
      <div onClick={handleInnerClick} style={{ padding: "20px", background: "lightblue" }}>
        İç Div
      </div>
    </div>
  );
}

export default StopPropagationExample;
```

---

### **4. `event.persist()` ile Objenin Korunması**

React'in `SyntheticEvent` nesnesi geri dönüşüm için havuzlanır (pooled). Bu nedenle olay işleyicisi tamamlandıktan sonra `event` objesine tekrar erişilemez. `event.persist()` ile bu durum engellenebilir.

```jsx
import React from "react";

function PersistExample() {
  const handleClick = (event) => {
    event.persist(); // Event objesini kalıcı hale getirir
    setTimeout(() => {
      console.log("Tıklanan öğe:", event.target); // Event objesi hala erişilebilir
    }, 1000);
  };

  return <button onClick={handleClick}>Tıkla ve Bekle</button>;
}

export default PersistExample;
```

---

### **5. `nativeEvent` ile Orijinal DOM Olaylarına Erişim**

React'in `SyntheticEvent` sistemi üzerinden orijinal tarayıcı olaylarına erişmek için `event.nativeEvent` kullanılır.

```jsx
import React from "react";

function NativeEventExample() {
  const handleClick = (event) => {
    console.log("React Event:", event);
    console.log("Native Event:", event.nativeEvent); // Orijinal DOM event
  };

  return <button onClick={handleClick}>Tıkla!</button>;
}

export default NativeEventExample;
```

---

### **6. Olayın Özelliklerini Kullanma**

React `event` objesiyle fare, klavye ve form olaylarına özel özelliklere erişebilirsiniz.

#### **Fare Olayları (`Mouse Events`):**
```jsx
function MouseEventExample() {
  const handleMouseMove = (event) => {
    console.log("X Konumu:", event.clientX);
    console.log("Y Konumu:", event.clientY);
  };

  return <div onMouseMove={handleMouseMove} style={{ height: "200px", background: "lightgray" }}>Fareyi hareket ettir</div>;
}
```

#### **Klavye Olayları (`Keyboard Events`):**
```jsx
function KeyEventExample() {
  const handleKeyDown = (event) => {
    console.log("Basılan Tuş:", event.key);
    console.log("Tuş Kodu:", event.code);
  };

  return <input type="text" onKeyDown={handleKeyDown} placeholder="Bir şey yaz..." />;
}
```

---

### **7. Dinamik Parametreler ile Event Kullanımı**

Bir olaya parametre göndermek için ok fonksiyonları kullanılabilir.

```jsx
function DynamicEventExample() {
  const handleClick = (name, event) => {
    console.log(`${name} tıklandı!`);
    console.log("Olay türü:", event.type);
  };

  return (
    <button onClick={(event) => handleClick("Buton", event)}>
      Tıkla!
    </button>
  );
}
```

---

### **Sonuç**

React'teki `event` objesi, olaylar hakkında detaylı bilgi sağlayarak kullanıcı etkileşimlerini yönetmek için güçlü bir araçtır. Önemli noktalar:
1. React `SyntheticEvent` sistemi performansı artırır ve tarayıcı uyumluluğunu kolaylaştırır.
2. `event.preventDefault()` ve `event.stopPropagation()` ile olayların kontrolü mümkündür.
3. `event.persist()` ile olay nesnesini kalıcı hale getirebilirsiniz.
4. Fare, klavye ve form olayları gibi spesifik olay tiplerini kullanarak detaylı etkileşimler oluşturabilirsiniz.