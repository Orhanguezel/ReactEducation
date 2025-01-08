### React Kurulumu Nasıl Yapılır?

React ile bir projeye başlamak için aşağıdaki adımları takip edebilirsiniz. React'i kurmak için farklı yöntemler mevcut, ancak en yaygın ve önerilen yöntem **Vite** veya **Create React App (CRA)** kullanımıdır. Alternatif olarak, manuel kurulum yapabilirsiniz.

---

### 1. **React Kurulumu için Gerekli Araçlar**
Öncelikle aşağıdaki araçların yüklü olduğundan emin olun:
- **Node.js:** React uygulamaları geliştirmek için gereklidir. [Node.js'i buradan indirip](https://nodejs.org/) yükleyin. Yükledikten sonra, aşağıdaki komutla versiyon kontrolü yapabilirsiniz:
  ```bash
  node -v
  npm -v
  ```

---

### 2. **React Kurulumu için Yöntemler**

#### **a. Vite ile React Projesi Kurulumu (Tavsiye Edilen Yöntem)**
Vite, hızlı ve modern bir build aracıdır. React projeleri için performans avantajları sağlar.

1. Proje klasörünü oluşturun:
   ```bash
   mkdir react-projem
   cd react-projem
   ```

2. Vite projesini başlatın:
   ```bash
   npm create vite@latest
   ```

3. İsim ve framework seçin:
   - Proje adı: `react-projem`
   - Framework: `React`
   - Dil: `JavaScript` veya `TypeScript`

4. Bağımlılıkları yükleyin:
   ```bash
   cd react-projem
   npm install
   ```

5. Projeyi başlatın:
   ```bash
   npm run dev
   ```

6. Projeyi tarayıcıda görmek için verilen URL'yi açın (genelde `http://localhost:5173`).

---

#### **b. Create React App (CRA) ile Kurulum**
`Create React App`, React projeleri için başlangıçta hazır bir yapı sunar. Ancak daha büyük projeler için Vite tercih edilir.

1. Yeni bir React projesi oluşturun:
   ```bash
   npx create-react-app react-projem
   ```

   > Eğer `npx` kullanılamıyorsa, Node.js sürümünüzü güncelleyin.

2. Klasöre geçin:
   ```bash
   cd react-projem
   ```

3. Uygulamayı çalıştırın:
   ```bash
   npm start
   ```

4. Tarayıcıda `http://localhost:3000` adresini açarak projeyi görüntüleyebilirsiniz.

---

#### **c. Manuel Kurulum (Gelişmiş Kullanıcılar için)**
React’i bağımsız bir şekilde kurmak için:

1. Yeni bir klasör oluşturun ve içine geçin:
   ```bash
   mkdir react-manuel
   cd react-manuel
   ```

2. Node.js bağımlılıklarını başlatın:
   ```bash
   npm init -y
   ```

3. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install react react-dom
   npm install --save-dev vite
   ```

4. `index.html`, `App.jsx` ve `main.jsx` gibi dosyalar oluşturup yapılandırın.
5. Projeyi çalıştırmak için `vite` komutunu kullanabilirsiniz:
   ```bash
   npm run dev
   ```

---

### 3. **Proje Dosya Yapısı**
Kurulumdan sonra oluşturulan dosya yapısı şu şekilde olacaktır:

```
react-projem/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
├── package.json
├── vite.config.js (Vite için)
└── README.md
```

---

### 4. **Kurulum Sonrası Kontrol**
- Proje tarayıcıda açıldığında "Welcome to React" veya ilgili başlangıç ekranını görmelisiniz.
- Her şey düzgün çalışıyorsa, artık React bileşenlerini oluşturmaya başlayabilirsiniz!

---

Eğer kurulum sırasında bir hata ile karşılaşırsanız, hata mesajını paylaşabilirsiniz, çözümüne yardımcı olabilirim. 😊