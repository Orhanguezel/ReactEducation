### React'te `<form>` Kullanımı: Detaylı Açıklama ve Örneklerle

React, HTML'de kullanılan geleneksel `<form>` elemanına birçok ek esneklik sağlar. React ile form verilerini ve işlemlerini yönetmek için farklı yöntemler sunulur: **kontrollü bileşenler**, **server fonksiyonları**, **optimistik güncellemeler**, **çoklu gönderim türleri** gibi. Bu konuyu detaylı bir şekilde ele alalım.

---

## **1. Temel `<form>` Kullanımı**
HTML'deki gibi React'te de bir `<form>` elemanı etkileşimli kontroller oluşturmak için kullanılır.

### Örnek:
```jsx
function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault(); // Sayfa yenilenmesini önler
    const formData = new FormData(event.target);
    alert(`Arama: ${formData.get("query")}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" placeholder="Ara..." />
      <button type="submit">Ara</button>
    </form>
  );
}
```

#### Özellikler:
- **action:** Formun gönderildiği URL veya fonksiyonu belirler.
- **onSubmit:** Form gönderim olayını ele almak için kullanılır.
- **event.preventDefault():** Tarayıcının varsayılan davranışını (sayfa yenileme) önler.

---

## **2. Form Gönderimini Yönetme**
React'te formlar, bir **fonksiyon** veya bir **server fonksiyonu** kullanılarak işlenebilir.

### **Form Gönderimi için Fonksiyon Kullanımı**
React'te bir `action` özelliği bir **fonksiyon** olarak ayarlandığında, form gönderim işlemi bu fonksiyon tarafından ele alınır.

#### Örnek:
```jsx
export default function Search() {
  function search(formData) {
    const query = formData.get("query");
    alert(`Arama yapıldı: '${query}'`);
  }

  return (
    <form action={search}>
      <input name="query" placeholder="Arama yapın..." />
      <button type="submit">Ara</button>
    </form>
  );
}
```

- **formData:** Form elemanlarının adlarını ve değerlerini içeren bir nesne.

#### Çıktı:
Form gönderildiğinde, `search` fonksiyonu çalışır ve `formData` nesnesini kullanarak giriş değerlerine erişir.

---

### **Server Fonksiyonu ile Form Gönderimi**
React, form gönderimini bir server fonksiyonuyla işleyebilir. Bu, özellikle JavaScript yavaş yükleniyorsa veya devre dışı bırakılmışsa faydalıdır.

#### Örnek:
```jsx
async function addToCart(formData) {
  "use server";
  const productId = formData.get("productId");
  console.log(`Ürün sepete eklendi: ${productId}`);
}

function AddToCart({ productId }) {
  return (
    <form action={addToCart}>
      <input type="hidden" name="productId" value={productId} />
      <button type="submit">Sepete Ekle</button>
    </form>
  );
}
```

#### Özellikler:
- `use server`: Fonksiyonun sunucuda çalışmasını sağlar.
- Gizli alanlar (`<input type="hidden">`): Ek veri taşımak için kullanılır.

---

## **3. Form Gönderimi Sırasında Yükleme Durumu Gösterme**
Form gönderilirken bir "yükleniyor" durumu göstermek için `useFormStatus` Hook'u kullanabilirsiniz.

#### Örnek:
```jsx
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Gönderiliyor..." : "Gönder"}
    </button>
  );
}

function Form({ action }) {
  return (
    <form action={action}>
      <SubmitButton />
    </form>
  );
}

export default function App() {
  async function submitForm(formData) {
    console.log("Form gönderiliyor...");
  }
  return <Form action={submitForm} />;
}
```

#### Özellikler:
- **`pending`:** Formun gönderim durumunu kontrol eder.
- Form gönderimi sırasında düğme devre dışı bırakılır ve bir yüklenme mesajı gösterilir.

---

## **4. Form Verilerini Optimistik Güncelleme**
React'te `useOptimistic` Hook'u, form gönderimi tamamlanmadan önce kullanıcı arayüzünü güncellemeye olanak tanır. Bu, uygulamanın daha hızlı ve duyarlı hissettirilmesini sağlar.

#### Örnek:
```jsx
import { useOptimistic } from "react";

function Chat({ messages, sendMessage }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      { text: newMessage, sending: true }
    ]
  );

  async function formAction(formData) {
    addOptimisticMessage(formData.get("message"));
    await sendMessage(formData);
  }

  return (
    <form action={formAction}>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text} {message.sending && <small>(Gönderiliyor...)</small>}
        </div>
      ))}
      <input type="text" name="message" />
      <button type="submit">Gönder</button>
    </form>
  );
}
```

#### Özellikler:
- Kullanıcı mesajı hemen görünür, ancak sunucunun onayı alındığında durum güncellenir.

---

## **5. Form Hatalarını Yönetme**
React'te bir form gönderim hatası oluştuğunda, bu hata bir **Error Boundary** kullanılarak ele alınabilir.

#### Örnek:
```jsx
import { ErrorBoundary } from "react-error-boundary";

export default function Search() {
  function search() {
    throw new Error("Arama hatası!");
  }

  return (
    <ErrorBoundary fallback={<p>Form gönderiminde bir hata oluştu.</p>}>
      <form action={search}>
        <input name="query" />
        <button type="submit">Ara</button>
      </form>
    </ErrorBoundary>
  );
}
```

---

## **6. Birden Fazla Gönderim Türü**
Formdaki farklı düğmelerle farklı gönderim türlerini yönetmek için `formAction` özelliği kullanılabilir.

#### Örnek:
```jsx
function SubmitForm() {
  function publish(formData) {
    alert(`Yayınlandı: ${formData.get("content")}`);
  }

  function save(formData) {
    alert(`Taslak kaydedildi: ${formData.get("content")}`);
  }

  return (
    <form action={publish}>
      <textarea name="content" placeholder="İçerik girin..." />
      <button type="submit">Yayınla</button>
      <button formAction={save}>Taslak Olarak Kaydet</button>
    </form>
  );
}
```

#### Özellikler:
- **`formAction`:** Her düğmeye farklı bir işlem atanabilir.

---

## **7. Özet**
React'te formlar aşağıdaki şekilde yönetilebilir:
1. **Kontrollü Bileşenler:** State ile tam kontrol.
2. **Server Fonksiyonları:** Form gönderimini sunucu üzerinden işleme.
3. **Optimistik Güncellemeler:** Kullanıcı arayüzünü hızlı güncelleme.
4. **Hata Yönetimi:** Error Boundary ile.
5. **Yükleme Durumları:** Form gönderimi sırasında kullanıcıya bilgi verme.
6. **Çoklu Gönderim Türleri:** Birden fazla işlem için.

Daha fazla detay veya açıklama istersen, lütfen sor! 😊
