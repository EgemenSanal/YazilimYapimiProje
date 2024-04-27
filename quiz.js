import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, set, get, child, onValue} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";




const firebaseConfig = {

  apiKey: "AIzaSyB1T5KUM_bnOcJIV6XB8Ml6zXYxqKzDYHE",

  authDomain: "fir-login-63cd9.firebaseapp.com",

  databaseURL: "https://fir-login-63cd9-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "fir-login-63cd9",

  storageBucket: "fir-login-63cd9.appspot.com",

  messagingSenderId: "73596038394",

  appId: "1:73596038394:web:474094adb57d07990bed43"

};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const devamButton = document.getElementById('next');
var sayac3 = 1;
var dogru = 0;
var yanlis = 0;
devamButton.addEventListener('click',function(event){
  const girilenValue = document.getElementById('sinavInput').value;
    const dbRef = ref(db);
    get(child(dbRef,'words/' + sayac3)).then((snapshot) =>{
        if(snapshot.exists()){
            const kelimeElemani = document.createElement('kelime-ingilizce');
            const kelimeElemani2 = document.createElement('kelime-turkceGiri');
            const kelimeElemani3 = document.createElement('kelime-cumle');
            const kelimeElemani4 = document.createElement('kelime-resim');
            const kelimelerListesi = document.getElementById('cardID');
            kelimelerListesi.innerHTML = "";
            kelimelerListesi.appendChild(kelimeElemani);
            kelimelerListesi.appendChild(kelimeElemani2);
            kelimelerListesi.appendChild(kelimeElemani3);
            kelimelerListesi.appendChild(kelimeElemani4);


            kelimeElemani.innerHTML = `
    <h4>${snapshot.val().ingKelime}</h4>
  `;
kelimeElemani4.innerHTML = `
  <img src="${snapshot.val().resimUrl}" alt="${snapshot.val().ingKelime}" class="card-img-top">
  `;

kelimelerListesi.innerHTML = ""; // Önceki kelimeyi temizleyin
kelimelerListesi.appendChild(kelimeElemani4);
  kelimelerListesi.appendChild(kelimeElemani);
  kelimelerListesi.appendChild(kelimeElemani2);


  
if(girilenValue == snapshot.val().turkceKarsiligi){
    dogru = dogru +1;
}else{
    yanlis = yanlis +1;
}

  sayac3 = sayac3+1;
        }else{
            alert('Dogru sayisi = ' + dogru + ' Yanlis sayisi = ' + yanlis);
            window.location.href = "app.html";
        }
    })
})

