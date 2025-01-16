### **React'te `useRef` ile Odaklanma Örnekleri**

React'te `useRef` kullanarak bir DOM elementine odaklanabiliriz. `useRef`, referans oluşturmak için kullanılır ve DOM öğesine erişimi kolaylaştırır. İşte yukarıdaki odaklanma örneklerinin React ile `useRef` kullanılarak yeniden yazılmış hali:

---

### **1. Sayfa Yüklendiğinde İlk Giriş Alanına Odaklanma**

Bir sayfa yüklendiğinde giriş alanına otomatik olarak odaklanmak için `useRef` kullanabiliriz:

```javascript
import React, { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Sayfa yüklendiğinde input'a odaklan
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Otomatik Odaklanma</h1>
      <input ref={inputRef} type="text" placeholder="Adınızı girin" />
    </div>
  );
}

export default App;
```

---

### **2. Hatalı Alanlara Odaklanma**

Bir form gönderildiğinde, belirli bir alan boş bırakıldıysa veya hata içeriyorsa o alana odaklanmak:

```javascript
import React, { useRef } from "react";

function Form() {
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;

    if (!email.includes("@")) {
      alert("Geçerli bir e-posta adresi girin.");
      emailRef.current.focus(); // Hatalı alanı odakla
    } else {
      alert("Form başarıyla gönderildi!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form Odaklanma Örneği</h1>
      <label>E-posta:</label>
      <input ref={emailRef} type="email" placeholder="E-posta adresinizi girin" />
      <button type="submit">Gönder</button>
    </form>
  );
}

export default Form;
```

---

### **3. Modal Açıldığında İlk Alana Odaklanma**

Bir modal açıldığında, modal içindeki bir giriş alanına otomatik olarak odaklanmak:

```javascript
import React, { useRef } from "react";

function App() {
  const modalInputRef = useRef(null);

  const openModal = () => {
    // Modal içindeki input alanına odaklan
    modalInputRef.current.focus();
  };

  return (
    <div>
      <h1>Modal Odaklanma</h1>
      <button onClick={openModal}>Modal Aç</button>
      <div className="modal">
        <input ref={modalInputRef} type="text" placeholder="Modal içinde odaklan" />
      </div>
    </div>
  );
}

export default App;
```

---

### **4. Dinamik Odaklanma (Hatalı Alana Göre)**

Birden fazla alanın olduğu bir formda, hangisinin hata verdiğine bağlı olarak odaklanmak:

```javascript
import React, { useRef } from "react";

function MultiFieldForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    if (!name) {
      alert("Ad alanı boş bırakılamaz.");
      nameRef.current.focus(); // Ad alanına odaklan
      return;
    }

    if (!email.includes("@")) {
      alert("Geçerli bir e-posta adresi girin.");
      emailRef.current.focus(); // E-posta alanına odaklan
      return;
    }

    alert("Form başarıyla gönderildi!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Hatalı Alan Odaklanma</h1>
      <div>
        <label>Ad:</label>
        <input ref={nameRef} type="text" placeholder="Adınızı girin" />
      </div>
      <div>
        <label>E-posta:</label>
        <input ref={emailRef} type="email" placeholder="E-posta adresinizi girin" />
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
}

export default MultiFieldForm;
```

---

### **5. Klavye ile Gezinti (Tab ve Enter)**

Tab tuşu ile butonlara geçiş yapabilir ve Enter ile bir butonu aktif hale getirebilirsiniz:

```javascript
import React, { useRef } from "react";

function ButtonNavigation() {
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (document.activeElement === button1Ref.current) {
        alert("Buton 1'e tıklandı");
      } else if (document.activeElement === button2Ref.current) {
        alert("Buton 2'ye tıklandı");
      }
    }
  };

  return (
    <div onKeyPress={handleKeyPress}>
      <button ref={button1Ref} tabIndex="0">
        Buton 1
      </button>
      <button ref={button2Ref} tabIndex="1">
        Buton 2
      </button>
    </div>
  );
}

export default ButtonNavigation;
```

---

### **6. Şifre Gösterme (Bonus)**

Şifre giriş alanına "Göster" butonu ekleyerek odaklanma sağlama ve şifreyi görünür hale getirme:

```javascript
import React, { useRef, useState } from "react";

function PasswordToggle() {
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
    passwordRef.current.focus(); // Şifre alanına odaklan
  };

  return (
    <div>
      <h1>Şifre Göster</h1>
      <input
        ref={passwordRef}
        type={showPassword ? "text" : "password"}
        placeholder="Şifre girin"
      />
      <button onClick={togglePassword}>
        {showPassword ? "Gizle" : "Göster"}
      </button>
    </div>
  );
}

export default PasswordToggle;
```

---

### **Sonuç**

`useRef`, React uygulamalarında DOM elementlerini kontrol etmek, odaklanmayı yönetmek ve kullanıcı deneyimini iyileştirmek için güçlü bir araçtır. Yukarıdaki örneklerde, `useRef` ile odaklanmanın farklı kullanım senaryolarını gördük. Bu yöntemler, formlar, modallar ve gezinme gibi birçok farklı durumda kullanılabilir.