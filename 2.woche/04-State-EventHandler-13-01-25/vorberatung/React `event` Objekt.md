### **React'te Events (Olaylar) Kullanımı**

React'te `events` (olaylar), kullanıcı etkileşimlerini yakalamak ve yanıtlamak için kullanılan mekanizmalardır. Tarayıcıdaki DOM olaylarına benzer şekilde çalışır, ancak React olay sistemi, performansı optimize etmek için olayları bir "sentezleyici (synthetic)" sistem aracılığıyla işler. Bu sistem, tüm olayları aynı şekilde ele alır ve çapraz tarayıcı uyumluluğunu artırır.

---

### **1. React'te Olayların Tanımlanması**

React'teki olay işleyicileri, JSX'te `camelCase` yazım tarzıyla tanımlanır (örneğin, `onClick` yerine `onclick` değil). Ayrıca, bir olay işleyiciye bir fonksiyon atanmalıdır.

#### **Temel Örnek:**
```jsx
import React from "react";

function ButtonClick() {
  const handleClick = () => {
    alert("Butona tıklandı!");
  };

  return <button onClick={handleClick}>Tıkla!</button>;
}

export default ButtonClick;
```

---

### **2. Olay Tipleri**

React'te sık kullanılan olay tipleri şunlardır:

#### **2.1. Mouse Olayları**
- `onClick`: Bir öğeye tıklandığında tetiklenir.
- `onDoubleClick`: Bir öğeye çift tıklandığında tetiklenir.
- `onMouseEnter`: Fare bir öğenin üzerine geldiğinde tetiklenir.
- `onMouseLeave`: Fare bir öğeden ayrıldığında tetiklenir.

#### **2.2. Klavye Olayları**
- `onKeyDown`: Tuşa basıldığında tetiklenir.
- `onKeyUp`: Tuş bırakıldığında tetiklenir.
- `onKeyPress`: Tuşa basıldığında tetiklenir (güncel tarayıcılarda `onKeyDown` kullanılması önerilir).

#### **2.3. Form Olayları**
- `onChange`: Bir giriş alanının değeri değiştiğinde tetiklenir.
- `onSubmit`: Form gönderildiğinde tetiklenir.
- `onFocus`: Bir öğe odaklandığında tetiklenir.
- `onBlur`: Odak bir öğeden ayrıldığında tetiklenir.

#### **2.4. Diğer Olaylar**
- `onLoad`: Bir bileşen veya kaynak yüklendiğinde tetiklenir.
- `onError`: Bir hata oluştuğunda tetiklenir.
- `onScroll`: Kaydırma işlemi gerçekleştiğinde tetiklenir.

---

### **3. Event Nesnesi**

React olay işleyicileri, tarayıcıdaki doğal `event` nesnesine benzer bir `SyntheticEvent` nesnesi alır. Bu nesne, olayın detaylarını içerir (örneğin, tıklanan öğe, klavye tuşu, fare konumu vb.).

#### **Örnek: Event Nesnesini Kullanma**
```jsx
import React from "react";

function EventDetails() {
  const handleClick = (event) => {
    console.log("Tıklanan öğe:", event.target);
    console.log("Olay tipi:", event.type);
  };

  return <button onClick={handleClick}>Detayları Göster</button>;
}

export default EventDetails;
```

#### **Event Özellikleri:**
- `event.target`: Olayı tetikleyen öğeyi verir.
- `event.type`: Olayın türünü belirtir (örneğin, `click`, `keydown`).
- `event.preventDefault()`: Varsayılan tarayıcı davranışını engeller (örneğin, bir form gönderimini iptal etmek).
- `event.stopPropagation()`: Olayın daha fazla yayılmasını durdurur.

---

### **4. Varsayılan Davranışların Engellenmesi**

Bazı olaylarda varsayılan tarayıcı davranışı engellenmelidir (örneğin, bir form gönderimini durdurmak).

#### **Örnek: `preventDefault` Kullanımı**
```jsx
import React from "react";

function FormExample() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Formun varsayılan gönderim işlemi engellenir
    alert("Form gönderimi durduruldu!");
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

### **5. Dinamik Parametrelerle Olay İşleme**

React'te bir olay işleyiciye dinamik parametreler geçmek için bir fonksiyon döndüren ok fonksiyonu kullanılabilir.

#### **Örnek: Dinamik Parametre Kullanımı**
```jsx
import React from "react";

function DynamicEvent() {
  const handleClick = (name) => {
    alert(`Merhaba, ${name}!`);
  };

  return (
    <div>
      <button onClick={() => handleClick("Ali")}>Ali</button>
      <button onClick={() => handleClick("Ayşe")}>Ayşe</button>
    </div>
  );
}

export default DynamicEvent;
```

---

### **6. Olay İşleyicilerde `this` Bağlamı**

Sınıf bileşenlerinde olay işleyicileri kullanırken, `this` bağlamının doğru şekilde bağlanması gerekir. Bu, genellikle `constructor` içinde `bind` ile yapılır.

#### **Örnek: Sınıf Bileşeninde `this` Kullanımı**
```jsx
import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this); // Bağlam bağlanır
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Sayım: {this.state.count}</p>
        <button onClick={this.handleClick}>Tıkla</button>
      </div>
    );
  }
}

export default ClickCounter;
```

---

### **7. Birden Fazla Olay İşleyicisi Kullanma**

Birden fazla olay işleyicisi bir öğeye atanabilir.

#### **Örnek: Birden Fazla Olay İşleyicisi**
```jsx
import React from "react";

function MultiEvents() {
  const handleMouseEnter = () => {
    console.log("Fare öğenin üzerine geldi.");
  };

  const handleClick = () => {
    console.log("Öğe tıklandı.");
  };

  return (
    <button onMouseEnter={handleMouseEnter} onClick={handleClick}>
      Olayları Deneyimle
    </button>
  );
}

export default MultiEvents;
```

---

### **8. Performans İyileştirmeleri**

Olay işleyicilerinin yeniden oluşturulmasını önlemek için `useCallback` Hook'u kullanılabilir. Bu, performansı artırır.

#### **Örnek: `useCallback` Kullanımı**
```jsx
import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Sayım: {count}</p>
      <button onClick={handleClick}>Tıkla</button>
    </div>
  );
}

export default Counter;
```

---

### **Sonuç**

React'teki olaylar, kullanıcı etkileşimlerini yakalamak ve yanıtlamak için güçlü bir araç sunar. Doğru bir şekilde kullanıldığında, uygulamaların dinamik ve etkileşimli hale gelmesini sağlar. Olay işleyicilerle çalışırken şu noktalara dikkat edilmelidir:
1. **Immutability Prensibi:** State güncellemelerinde doğrudan değişiklikten kaçının.
2. **`preventDefault` ve `stopPropagation` Kullanımı:** Gerekli durumlarda tarayıcı davranışlarını kontrol edin.
3. **Performans Optimizasyonu:** Gereksiz yeniden oluşturmalardan kaçının (`useCallback` kullanımı).