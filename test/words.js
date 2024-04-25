const kelimeler = [
    {
        ingilizce : "apple",
        turkce : "elma",
        resim : "pictures/apple.jpg"
    },
    {
        ingilizce : "school",
        turkce : "okul",
        resim : "pictures/school.jpg"
    },
    {
        ingilizce : "phone",
        turkce : "telefon",
        resim : "pictures/phone.jpg"
    },
    {
        ingilizce : "book",
        turkce : "kitap",
        resim : "pictures/book.jpg"
    }
];
let siradakiKelimeIndeksi = 0;
const buton = document.getElementById('anladim');

const ingKelime = document.getElementById('ingilizce');
const resimList = document.getElementById('resimList');
const turkceKelime = document.getElementById('turkce');

buton.addEventListener("click", function(event) {
    event.preventDefault();
    const kelime = kelimeler[siradakiKelimeIndeksi];

    const kelimeElemani = document.createElement('kelime-ingilizce');
    const kelimeElemani2 = document.createElement('kelime-turkce');
    const kelimeElemani3 = document.createElement('kelime-resim');
    kelimeElemani.innerHTML = `
    <h4>${kelime.ingilizce}</h4>
  `;
  kelimeElemani2.innerHTML = `
    <p>${kelime.turkce}</p>
  `;
  kelimeElemani3.innerHTML = `
  <img src="${kelime.resim}" alt="${kelime.ingilizce}" class="card-img-top">
  `;
    const kelimelerListesi = document.getElementById('cardID');
    kelimelerListesi.innerHTML = ""; // Önceki kelimeyi temizleyin
    kelimelerListesi.appendChild(kelimeElemani3);
    kelimelerListesi.appendChild(kelimeElemani);
    kelimelerListesi.appendChild(kelimeElemani2);
    

  
    siradakiKelimeIndeksi = (siradakiKelimeIndeksi + 1) % kelimeler.length;
  });
  

kelimeler.forEach(kelime => {
  const kelimeElemani = document.createElement('kelime-ingilizce');
  const kelimeElemani2 = document.createElement('kelime-turkce');
  const kelimeElemani3 = document.createElement('kelime-resim');

  kelimeElemani.innerHTML = `
    <h4>${kelime.ingilizce}</h4>
  `;
  kelimeElemani2.innerHTML = `
    <p>${kelime.turkce}</p>
  `;
  kelimeElemani3.innerHTML = `
  <img src="${kelime.resim}" alt="${kelime.ingilizce}" class="card-img-top">
  `;
  ingKelime.appendChild(kelimeElemani);
  turkceKelime.appendChild(kelimeElemani2);
  resimList.appendChild(kelimeElemani3);

});

function kelimeEkle(ingilizce, turkce, resimDosyasi) {
    //dogrulama yapma
    if (!ingilizce || !turkce || !resimDosyasi) {
      alert("Lütfen tüm alanlari doldurun!");
      return;
    }
  
    //dosya tipini kontrol etme
    if (resimDosyasi.type.startsWith("image/")) {
      
    } else {
      alert("Yalnizca resim dosyasi seçebilirsiniz!");
      return;
    }
  
    //dosyayi okuma
    const reader = new FileReader();
    reader.onload = function(event) {
      const resimBase64 = event.target.result; // Dosyanın base64 kodlu hali
  
      //kelimeyi listeye ekleme
      kelimeler.push({
        ingilizce: ingilizce,
        turkce: turkce,
        resim: resimBase64 // Base64 kodlu resmi kullanın
      });
  
      //kullaniciya geri bildirim
      alert("Kelime basariyla eklendi!");

    };
    reader.readAsDataURL(resimDosyasi);
  }
  
