### **Kontrollü ve Kontrolsüz Bileşenler: React JS**

React’te form verilerini yönetmek için iki temel yöntem vardır: **Kontrollü bileşenler (Controlled Components)** ve **Kontrolsüz bileşenler (Uncontrolled Components)**. Bu yaklaşımlar, form verilerinin nasıl işlendiği konusunda farklılık gösterir.

---

## **Kontrollü Bileşenler (Controlled Components)**

**Kontrollü bileşenler**, form verilerini React’in state’i üzerinden yöneten bileşenlerdir. Bu tür bileşenlerde, form elemanlarının değerleri bileşenin state’ine bağlıdır ve herhangi bir değişiklik olay yöneticileri (`event handlers`) aracılığıyla yönetilir.

### **Kontrollü Bileşenlerin İşleyişi**
1. **State’in Başlatılması**: Form elemanının başlangıç değeri, bileşenin state’inde tanımlanır.
2. **Olay Yönetimi**: Form elemanındaki değişiklikler, `onChange` olay yöneticisi aracılığıyla state’i günceller.
3. **Render İşlemi**: Form elemanının değeri, bileşenin state’inden türetilir.

#### **Örnek: Kontrollü Bir Form**
```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Girilen Değer: {value}</p>
    </div>
  );
}
export default ControlledForm;
```

---

### **Kontrollü Bileşenlerin Avantajları**
1. **Merkezi Veri Yönetimi**:
   - Form verileri, React’in state’i ile merkezi olarak yönetilir.
   - Kodun okunabilirliği ve yönetimi kolaylaşır.

2. **Kolay Form Validasyonu**:
   - Validasyon işlemleri, `onChange` ya da `onSubmit` olaylarıyla kolayca yapılabilir.
   ```jsx
   const handleChange = (event) => {
     const newValue = event.target.value;
     setValue(newValue);

     if (newValue.length < 3) {
       setError('Değer en az 3 karakter olmalı');
     } else {
       setError('');
     }
   };
   ```

3. **Hata Ayıklama ve Test Kolaylığı**:
   - State, React tarafından yönetildiği için formun o anki durumu her zaman erişilebilir durumdadır.

4. **UI Güncellemelerinde Tutarlılık**:
   - Kullanıcı arayüzü her zaman React state’iyle senkronize şekilde çalışır.
   - Örneğin, bir `submit` düğmesi, yalnızca gerekli veriler sağlandığında etkinleştirilebilir.

---

## **Kontrolsüz Bileşenler (Uncontrolled Components)**

**Kontrolsüz bileşenler**, form verilerini React state yerine **DOM tarafından yönetir**. Verilere erişmek için `ref` kullanılır. Bu yöntem, genellikle daha az karmaşık formlar için uygundur.

### **Kontrolsüz Bileşenlerin İşleyişi**
1. **Ref Ataması**: Form elemanına bir `ref` atanır.
2. **Değerlere Erişim**: Form verileri, `ref` üzerinden doğrudan DOM’dan alınır.

#### **Örnek: Kontrolsüz Bir Form**
```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Girilen İsim: ' + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>İsim:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Gönder</button>
    </form>
  );
}
export default UncontrolledForm;
```

---

### **Kontrolsüz Bileşenlerin Avantajları**
1. **Basitlik**:
   - Daha az kod yazılır; state yönetimi gerekmez.
   - DOM’un doğal işleyişi kullanılır.

2. **Daha Az Yeniden Render**:
   - Form elemanlarındaki değişiklikler React bileşeninin yeniden render edilmesine neden olmaz.

3. **Performans**:
   - Çok sayıda form elemanına sahip karmaşık formlarda daha iyi performans sağlar.

4. **Doğrudan DOM’a Erişim**:
   - `ref` ile DOM elemanlarına doğrudan erişim sağlanır.
   - Üçüncü parti kütüphanelerle entegrasyon için faydalıdır.

---

## **Kontrollü ve Kontrolsüz Bileşenlerin Karşılaştırılması**

| Özellik                | Kontrollü Bileşenler                          | Kontrolsüz Bileşenler                     |
|------------------------|-----------------------------------------------|------------------------------------------|
| **Veri Yönetimi**      | React’in state’i ile                         | DOM ile                                  |
| **Kod Karmaşıklığı**   | Daha fazla kod                               | Daha az kod                              |
| **Performans**         | Daha az                                     | Daha yüksek                              |
| **Validasyon Kolaylığı**| Kolay                                       | Zor                                      |
| **Kullanım Alanı**     | Karmaşık formlar                            | Basit formlar veya üçüncü parti entegrasyonu |

---

### **Varsayılan Değerlerle Kontrolsüz Bileşen Kullanımı**

Kontrolsüz bileşenlerde, başlangıç değerlerini tanımlamak için `defaultValue` ya da `defaultChecked` kullanılabilir.

#### **Örnek: Varsayılan Değer Kullanımı**
```jsx
function DefaultValueForm() {
  return (
    <form>
      <label>
        İsim:
        <input type="text" defaultValue="Ahmet" />
      </label>
      <label>
        Aktif mi?
        <input type="checkbox" defaultChecked />
      </label>
      <button type="submit">Gönder</button>
    </form>
  );
}
```

---

## **Sonuç**

1. **Kontrollü Bileşenler**:
   - Verilerin sıkı bir şekilde yönetilmesi ve validasyon gerektiğinde tercih edilir.
   - React state üzerinden merkezi bir veri yönetimi sunar.

2. **Kontrolsüz Bileşenler**:
   - Daha basit ve performans gerektiren durumlarda uygundur.
   - DOM’a doğrudan erişim sağlar ve daha az kod gerektirir.

Her iki yöntemin de avantaj ve dezavantajlarını göz önünde bulundurarak, proje gereksinimlerine uygun olanı seçebilirsiniz. Detaylı örneklerle yardımcı olmaya devam edebilirim! 😊