### SPA, React / Çarşamba 08.01.25

#### **Öğrenim Hedefleri**

---

### 1. **`SPA` (Single Page Application) Nedir?**
**Single Page Application (SPA)**, bir web uygulaması veya websitesi türüdür. Bu tür uygulamalarda tüm içerik **tek bir HTML sayfasında** yüklenir ve kullanıcı etkileşimleri sonucunda sayfa yeniden yüklenmeden içerik dinamik olarak değiştirilir. 
- **Avantajları:**
  - Daha hızlı bir kullanıcı deneyimi sunar (tam sayfa yenileme yoktur).
  - Mobil uygulama benzeri bir his verir.
  - Daha az veri aktarımı yapar, çünkü sadece ihtiyaç duyulan veriler yüklenir.
- **Örnekler:** Gmail, Facebook, Google Maps.

---

### 2. **`REACT` Nedir?**
React, kullanıcı arayüzleri (UI) geliştirmek için kullanılan bir **JavaScript kütüphanesidir**. 
- **Facebook** tarafından geliştirilmiştir.
- **Özellikleri:**
  - **Bileşen Tabanlı Yapı:** Kullanıcı arayüzü, tekrar kullanılabilir küçük bileşenlere (component) bölünür.
  - **Sanal DOM:** Sayfa değişikliklerini daha hızlı bir şekilde işlemek için sanal DOM kullanılır.
  - **Tek Yönlü Veri Akışı:** Veriler, daha kolay takip edilebilir şekilde yalnızca tek yönde akar.
- **Kullanım Alanları:** Dinamik ve interaktif ön yüz uygulamaları oluşturmak.

---

### 3. **`REACT Ekosistemi` Nedir?**
React ekosistemi, React ile birlikte kullanılan araçlar ve kütüphaneleri ifade eder:
- **Durum Yönetimi:** Redux, Zustand, MobX.
- **Yönlendirme:** React Router.
- **Stil Yönetimi:** TailwindCSS, Styled Components, Emotion.
- **API İşleme:** Axios, React Query.
- **Test Araçları:** Jest, React Testing Library.
- **Build Araçları:** Vite, Webpack.
- **Server-Side Rendering (SSR):** Next.js.

---

### 4. **`REACT` Nasıl Çalışır?**
- **Bileşenler:** React uygulamaları, bağımsız ve yeniden kullanılabilir bileşenler halinde yapılandırılır. Her bileşenin kendi durumu (state) ve yaşam döngüsü vardır.
- **Sanal DOM:** React, değişiklikleri önce sanal bir DOM üzerinde uygular. Daha sonra sadece gerekli güncellemeleri gerçek DOM’a aktarır.
- **Props ve State:**
  - **Props:** Bir bileşenin dışarıdan aldığı verilerdir (readonly).
  - **State:** Bileşenin kendi içinde yönetilen ve değişebilen verileridir.
- **Tek Yönlü Veri Akışı:** Veriler, ebeveynden çocuğa doğru akar ve bu, uygulamanın kontrolünü kolaylaştırır.

---

### 5. **`JSX` Nedir?**
- JSX, **JavaScript XML** anlamına gelir.
- React bileşenlerini yazmak için kullanılan, HTML benzeri bir sözdizimidir.
- Örnek:
  ```jsx
  const element = <h1>Merhaba Dünya!</h1>;
  ```
- **Avantajları:**
  - Daha okunabilir ve anlaşılır kod yazmayı sağlar.
  - Görsel yapı ve mantıksal yapı arasındaki bağlantıyı kolaylaştırır.

---

### 6. **`Vite` Nedir?**
- **Vite**, modern bir **build aracı** ve geliştirme ortamıdır.
- **Özellikleri:**
  - **ES Modülleri** kullanarak hızlı bir geliştirme sunar.
  - Minimum yapılandırma gerektirir.
  - React, Vue, Svelte gibi birçok framework'ü destekler.
- **Avantajları:**
  - Webpack gibi eski araçlara kıyasla daha hızlı başlatma ve güncelleme süresi.
  - Hafif ve verimlidir.

---

#### **Kaynaklar**
1. [Ders Deposu]()
2. [REACT Giriş Videosu](https://www.youtube.com/watch?v=Tn6-PIqc4UM)
3. [2024 React Ekosistemi](https://dev.to/avinashvagh/react-ecosystem-in-2024-418k)
4. [React Geliştirici Eğitimleri](https://react.dev/)
5. [React Legacy Dokümanları](https://legacy.reactjs.org/)
6. [WebDevSimplified React Videoları](https://www.youtube.com/@WebDevSimplified/search)
7. [Vite Dokümantasyonu](https://vite.dev/)

---

#### **Görevler**
- Yukarıdaki konular hakkında detaylı bilgi hazırlayın.
- Konulara ait örnekler ve açıklamalar ekleyin.
- React’in özelliklerini küçük kod örnekleriyle gösterin.