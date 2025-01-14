### **Spinner in React (Yükleme Göstergesi)**

React uygulamalarında veri yükleme işlemi sırasında veya bir işlem devam ederken kullanıcıya bir görsel geri bildirim sağlamak için "spinner" veya "loading indicator" adı verilen yükleme göstergeleri kullanılır. Spinner, kullanıcı deneyimini iyileştirir ve işlemin tamamlanmasını beklemelerini sağlar.

---

### **1. Spinner Kullanımı İçin Adımlar**

1. **Spinner Göstermek İçin Durum Yönetimi:**
   - Yükleme durumunu (`loading`) takip etmek için bir `useState` kullanılır.
   - Veri veya işlem tamamlandığında bu durum güncellenir.

2. **CSS ile Basit Spinner Oluşturma:**
   - CSS animasyonları kullanarak özelleştirilmiş bir spinner tasarlanabilir.

3. **React Spinners Kütüphanesi Kullanımı:**
   - Hazır bir kütüphane kullanarak profesyonel spinner tasarımlarından faydalanabilirsiniz.

---

### **2. CSS ile Spinner**

#### **a. CSS ile Basit Spinner**

**Örnek:**
```jsx
import React, { useState, useEffect } from "react";
import "./Spinner.css"; // CSS dosyasını içe aktar

function SpinnerExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 saniye beklet
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner"></div> // Spinner bileşeni
      ) : (
        <p>İşlem tamamlandı!</p>
      )}
    </div>
  );
}

export default SpinnerExample;
```

**CSS (Spinner.css):**
```css
.spinner {
  border: 8px solid #f3f3f3; /* Açık renk çerçeve */
  border-top: 8px solid #3498db; /* Mavi dönen çerçeve */
  border-radius: 50%; /* Yuvarlak */
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite; /* Animasyon */
}

@keyframes spin {
  0% {
    transform: rotate(0deg); /* Başlangıç */
  }
  100% {
    transform: rotate(360deg); /* 360 derece dönüş */
  }
}
```

#### **Sonuç:**
Yükleme süresince dönen bir yuvarlak gösterilir ve işlem tamamlandığında mesaj görüntülenir.

---

### **3. React Spinners Kütüphanesi**

React uygulamalarında profesyonel spinnerlar kullanmak için **react-spinners** kütüphanesi kullanılabilir.

#### **a. React Spinners Kurulumu**
```bash
npm install react-spinners
```

#### **b. Temel Kullanım**

**Örnek:**
```jsx
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

function ReactSpinnerExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {loading ? (
        <ClipLoader color="#36d7b7" size={50} />
      ) : (
        <p>İşlem tamamlandı!</p>
      )}
    </div>
  );
}

export default ReactSpinnerExample;
```

#### **Özelleştirme:**
- **`color`**: Spinner rengini ayarlar.
- **`size`**: Spinner boyutunu belirler.

---

### **4. Farklı React Spinners**

**React Spinners Kütüphanesi** birçok farklı spinner seçeneği sunar. İşte birkaç örnek:

1. **BarLoader**
```jsx
import { BarLoader } from "react-spinners";

function BarSpinner() {
  return <BarLoader color="#36d7b7" width={200} />;
}
```

2. **BounceLoader**
```jsx
import { BounceLoader } from "react-spinners";

function BounceSpinner() {
  return <BounceLoader color="#ff5722" size={60} />;
}
```

3. **PulseLoader**
```jsx
import { PulseLoader } from "react-spinners";

function PulseSpinner() {
  return <PulseLoader color="#4caf50" size={15} />;
}
```

---

### **5. Spinner ile Veri Yükleme**

Spinner, veri yükleme işlemleri sırasında da kullanılabilir.

#### **Örnek:**
```jsx
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

function FetchDataWithSpinner() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false); // Yükleme tamamlandı
      })
      .catch((error) => console.error("Hata:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {loading ? (
        <ClipLoader color="#36d7b7" size={50} />
      ) : (
        <div>
          {data.slice(0, 10).map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchDataWithSpinner;
```

---

### **6. React Bootstrap Spinner Kullanımı**

React Bootstrap kütüphanesi de modern ve şık spinnerlar sunar.

#### **Kurulum:**
```bash
npm install react-bootstrap bootstrap
```

#### **Örnek:**
```jsx
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

function BootstrapSpinnerExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <p>İşlem tamamlandı!</p>
      )}
    </div>
  );
}

export default BootstrapSpinnerExample;
```

---

### **7. Spinner'ı Global Kullanım**

Eğer birçok sayfada spinner kullanmak istiyorsanız, spinnerı global bir state veya context üzerinden kontrol edebilirsiniz.

#### **Örnek:**
```jsx
import React, { createContext, useContext, useState } from "react";

const SpinnerContext = createContext();

function SpinnerProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <SpinnerContext.Provider value={{ loading, setLoading }}>
      {children}
    </SpinnerContext.Provider>
  );
}

function GlobalSpinner() {
  const { loading } = useContext(SpinnerContext);

  return (
    loading && (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    )
  );
}

function App() {
  const { setLoading } = useContext(SpinnerContext);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // Simule edilmiş yükleme
  };

  return (
    <div>
      <GlobalSpinner />
      <button onClick={fetchData}>Veri Yükle</button>
    </div>
  );
}

export default function Root() {
  return (
    <SpinnerProvider>
      <App />
    </SpinnerProvider>
  );
}
```

---

### **Sonuç**

- Spinner, yükleme süreçlerinde kullanıcıya görsel geri bildirim sağlar.
- CSS, `react-spinners` veya React Bootstrap gibi yöntemlerle kolayca entegre edilebilir.
- Daha geniş projelerde `SpinnerProvider` gibi global bir yapı kullanılarak yönetimi kolaylaştırılabilir.

Ek bilgi veya özelleştirme gerekiyorsa lütfen belirtin! 😊