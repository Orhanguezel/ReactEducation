### **Daten beim Laden abrufen (Veri Yükleme)**

React’te bir komponent yüklendiğinde verileri bir API'den veya başka bir kaynaktan almak oldukça yaygın bir işlemdir. Bu işlem genellikle `useEffect` Hook'u kullanılarak yapılır. 

---

### **1. Temel Adımlar**

#### **a. API'den Veri Çekme Süreci:**
1. **Veri yükleme durumu tanımlanır (`loading`).**
2. **Veri depolamak için bir state oluşturulur.**
3. **`useEffect` kullanılarak veri yükleme işlemi başlatılır.**
4. **Veri başarıyla alındığında state güncellenir.**
5. **Hata durumunda hata yönetimi yapılır.**

---

### **2. Temel Örnek**

Aşağıda bir API'den veri çeken bir örnek bulunmaktadır:

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState([]); // Verileri depolamak için state
  const [loading, setLoading] = useState(true); // Yüklenme durumu

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // API'ye istek gönder
      .then((response) => response.json()) // Yanıtı JSON'a çevir
      .then((data) => {
        setData(data); // Verileri state'e kaydet
        setLoading(false); // Yükleme durumu tamamlandı
      })
      .catch((error) => console.error("Hata:", error)); // Hataları yakala
  }, []); // []: Effect yalnızca ilk render işleminde çalışır

  if (loading) {
    return <p>Veriler yükleniyor...</p>; // Yüklenme sırasında gösterilecek mesaj
  }

  return (
    <div>
      {data.slice(0, 10).map((item) => ( // İlk 10 veriyi göster
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default DataFetcher;
```

#### **Sonuç:**
- İlk render sırasında `loading` durumu `true` olarak belirlenir ve kullanıcıya "Veriler yükleniyor..." mesajı gösterilir.
- Veri çekme işlemi tamamlandıktan sonra `data` güncellenir ve API'den alınan başlıklar (`item.title`) ekrana yazdırılır.

---

### **3. Spinner Kullanarak Yükleme Durumunu Gösterme**

Kullanıcılara görsel bir geri bildirim sağlamak için yükleme sürecinde bir "spinner" gösterebilirsiniz.

#### **Örnek:**
```jsx
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

function DataFetcherWithSpinner() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Hata:", error));
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return (
    <div>
      {data.slice(0, 10).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default DataFetcherWithSpinner;
```

---

### **4. Hata Yönetimi Eklemek**

Veri çekme sırasında bir hata oluşursa, bunu yönetmek kullanıcı deneyimi açısından önemlidir.

#### **Hata Yönetimi Örneği:**
```jsx
import React, { useState, useEffect } from "react";

function DataFetcherWithErrorHandling() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Veri alınırken bir hata oluştu!");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Veriler yükleniyor...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      {data.slice(0, 10).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default DataFetcherWithErrorHandling;
```

#### **Açıklamalar:**
- **`error` State:** Hata mesajını saklar.
- Eğer bir hata oluşursa, kullanıcıya bu hata ekranda gösterilir.

---

### **5. Asenkron/Await Kullanımı**

Daha okunabilir bir kod için `async/await` ile veri çekme işlemi yapılabilir.

#### **Örnek:**
```jsx
import React, { useState, useEffect } from "react";

function DataFetcherWithAsyncAwait() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Veri alınırken hata oluştu!");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Veriler yükleniyor...</p>;
  }

  return (
    <div>
      {data.slice(0, 10).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default DataFetcherWithAsyncAwait;
```

---

### **6. `useEffect`'in Bağımlılık Dizisi ile Çalışması**

Eğer bağımlılık dizisi verilirse, `useEffect` sadece bağımlılıklardan biri değiştiğinde çalışır.

#### **Örnek:**
Birden fazla veri kaynağına bağlı olarak veri çekme:
```jsx
function DataFetcherWithDependencies({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Hata:", error));
  }, [userId]); // userId değiştiğinde tekrar çalışır

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
```

---

### **Sonuç**
- **Veri Yükleme İşlemi:**
  - `useEffect` içinde API çağrıları yapılır.
  - `loading`, `error` gibi durumlar yönetilir.
  - Gerektiğinde `async/await` veya hata yönetimi eklenir.

Ek olarak daha karmaşık senaryolar veya özel ihtiyaçlar için daha fazla detay sağlayabilirim. 😊