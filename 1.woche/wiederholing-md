

### **Lernziele ve Plan**
1. **JavaScript Wiederholung**:  
   - Temel JS konularını gözden geçirme: değişkenler, veri tipleri, döngüler, fonksiyonlar.
   - Array ve Object manipülasyonları.
   - Callbacks, Promises, ve async-await gibi asenkron programlama konseptlerini tekrar etme.

2. **Klein Project - Harry Potter API**:  
   - Bir API'den veri çekme ve bu veriyi işleme.
   - `fetch` metodu ile veri alma ve asenkron süreçlerin yönetimi.
   - Gelen veriyi düzgün bir şekilde ele alma (parse etme, işleme).

3. **Error Handling**:
   - `try...catch` yapısı kullanarak hataları yakalama.
   - `throw new Error` ile özel hata mesajları oluşturma.
   - Hata nesnelerinin (`Error object`) kullanımı.

---

### **Kullanılacak Kaynaklar ve API**
**Harry Potter API:**  
[HP API](https://hp-api.onrender.com/) üzerinden karakter bilgilerini veya ev bilgilerini çekebilirsiniz.

---

### **Adım Adım Proje Uygulaması**

#### 1. JavaScript Wiederholung
Küçük bir örnekle başlayabiliriz:
```javascript
const students = ['Harry', 'Hermione', 'Ron'];

// Array Manipulation
students.forEach(student => console.log(student));

const housePoints = {
  Gryffindor: 100,
  Slytherin: 80,
  Ravenclaw: 90,
  Hufflepuff: 70,
};

// Object Keys ve Values
console.log(Object.keys(housePoints));
console.log(Object.values(housePoints));
```

#### 2. API'den Veri Çekme ve İşleme
Harry Potter API'den tüm karakterleri çekip, Gryffindor üyelerini filtreleme:
```javascript
const fetchHarryPotterCharacters = async () => {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    if (!response.ok) {
      throw new Error(`API hatası: ${response.status}`);
    }
    const characters = await response.json();

    // Gryffindor karakterlerini filtrele
    const gryffindorMembers = characters.filter(
      character => character.house === 'Gryffindor'
    );
    console.log(gryffindorMembers);
  } catch (error) {
    console.error('Bir hata oluştu:', error.message);
  }
};

fetchHarryPotterCharacters();
```

#### 3. Error Handling
Hata fırlatma ve yakalama:
```javascript
const processCharacterData = (data) => {
  if (!data || data.length === 0) {
    throw new Error('Veri bulunamadı!');
  }
  // Veriyi işle
  data.forEach(character => console.log(character.name));
};

try {
  processCharacterData([]);
} catch (error) {
  console.error('Hata:', error.message);
}
```

---

### **Sonuç**
Bu konular React öğrenmeden önce size asenkron programlama ve hataların yönetimi konusunda güçlü bir temel sağlayacaktır. Hazırlık sırasında takıldığınız noktalar olursa her zaman sorabilirsiniz.