const kelimeler = [
    {
        ingilizce : "apple",
        turkce : "elma",
        resim : "pictures/apple.jpg",
        sentence : "While visiting an orchard, I picked a basket full of red apples and green apples, savoring their crispness and sweetness as I strolled through the rows of trees."
    },
    {
        ingilizce : "school",
        turkce : "okul",
        resim : "pictures/school.jpg",
        sentence : "I attended elementary school in my hometown, then went to middle school in the city, and finally graduated from high school in another state. "
    },
    {
        ingilizce : "phone",
        turkce : "telefon",
        resim : "pictures/phone.jpg",
        sentence : "While waiting for my turn at the doctor's office, I browsed the internet on my phone, checked my emails on my laptop, and played a game on my friend's phone."
    },
    {
        ingilizce : "book",
        turkce : "kitap",
        resim : "pictures/book.jpg",
        sentence : "I spent the entire weekend curled up on the couch, reading a book of short stories, listening to audiobooks, and browsing through old cookbooks."
    }
];
let siradakiKelimeIndeksi = 0;
let baslangicKelimeIndeksi = 0;

const buton = document.getElementById('anladim');

const ingKelime = document.getElementById('ingilizce');
const resimList = document.getElementById('resimList');
const turkceKelime = document.getElementById('turkce');
const cumle = document.getElementById('cumle');


buton.addEventListener("click", function(event) {
  if (siradakiKelimeIndeksi === kelimeler.length - 1) {
    buton.style.display = "none";
  }
    event.preventDefault();
    const kelime = kelimeler[siradakiKelimeIndeksi];

    const kelimeElemani = document.createElement('kelime-ingilizce');
    const kelimeElemani2 = document.createElement('kelime-turkce');
    const kelimeElemani3 = document.createElement('kelime-resim');
    const kelimeElemani4 = document.createElement('cumle-ekle')
    const kelimelerListesi = document.getElementById('cardID');
    kelimelerListesi.innerHTML = ""; // Önceki kelimeyi temizleyin
    kelimelerListesi.appendChild(kelimeElemani3);
  kelimelerListesi.appendChild(kelimeElemani);
  kelimelerListesi.appendChild(kelimeElemani2);
  kelimelerListesi.appendChild(kelimeElemani4);

    kelimeElemani.innerHTML = `
    <h4>${kelime.ingilizce}</h4>
  `;
  kelimeElemani2.innerHTML = `
    <p>${kelime.turkce}</p>
  `;
  kelimeElemani3.innerHTML = `
  <img src="${kelime.resim}" alt="${kelime.ingilizce}" class="card-img-top">
  `;
  kelimeElemani4.innerHTML = `
    <p2>${kelime.sentence}</p2>
  `;
  
  kelimelerListesi.innerHTML = ""; // Önceki kelimeyi temizleyin
  kelimelerListesi.appendChild(kelimeElemani3);
  kelimelerListesi.appendChild(kelimeElemani);
  kelimelerListesi.appendChild(kelimeElemani2);
  kelimelerListesi.appendChild(kelimeElemani4);

    

  
    siradakiKelimeIndeksi = (siradakiKelimeIndeksi + 1) % kelimeler.length;
  });
  
  const kelimeFormu = document.getElementById('kelimeEkle');

kelimeFormu.addEventListener("click", function(event) {
    event.preventDefault();
  
    const yeniKelime = {
        ingilizce: document.getElementById('yeniingilizcekelime').value,
        turkce: document.getElementById('turkcekarsiligi').value,
        resim: document.getElementById('myFile').value
    };

    kelimeler.push(yeniKelime); 
    localStorage.setItem('yeniKelime', JSON.stringify(kelimeler));
   
});

//kelime ekleme fonksiyonu
// function kelimeEkle(ingilizce, turkce, resimDosyasi) {



//     if (!ingilizce || !turkce || !resimDosyasi) {
//       alert("Lütfen tüm alanlari doldurun!");
//       return;
//     }
  
//     //dosya tipini kontrol etme
//     if (resimDosyasi.type.startsWith("image/")) {
      
//     } else {
//       alert("Yalnizca resim dosyasi seçebilirsiniz!");
//       return;
//     }
  
//     //dosyayi okuma
//     const reader = new FileReader();
//     reader.onload = function(event) {
//       const resimBase64 = event.target.result; // Dosyanın base64 kodlu hali
  
//       //kelimeyi listeye ekleme
//       kelimeler.push({
//         ingilizce: ingilizce,
//         turkce: turkce,
//         resim: resimBase64 // Base64 kodlu resmi kullanın
//       });
  
//       //kullaniciya geri bildirim
//       alert("Kelime basariyla eklendi!");

//     };
//     reader.readAsDataURL(resimDosyasi);
//   }
  
