//Databaseden gerekli bilgileri importlama

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import { getAuth} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, set, get, child, onValue} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";


//database configi


const firebaseConfig = {

  apiKey: "AIzaSyB1T5KUM_bnOcJIV6XB8Ml6zXYxqKzDYHE",

  authDomain: "fir-login-63cd9.firebaseapp.com",

  databaseURL: "https://fir-login-63cd9-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "fir-login-63cd9",

  storageBucket: "fir-login-63cd9.appspot.com",

  messagingSenderId: "73596038394",

  appId: "1:73596038394:web:474094adb57d07990bed43"

};

// Firebase'i baslatma


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const devamButton = document.getElementById('next');
var sayac3 = 1;

const girilenValue = document.getElementById('sinavInput').value;
const devamInput = document.getElementById('sinavInput');

var dogru = 0;
var yanlis = 0;
const dbRef = ref(db); //kelimelerin saklandigi dizinin referansi
var sayac4 = 1;
const kontrolButon = document.getElementById('check');
kontrolButon.addEventListener('click',function(event){
  get(child(dbRef,'words/' + sayac4)).then((snapshot) =>{
    if(snapshot.exists()){
      if( document.getElementById('sinavInput').value == snapshot.val().turkceKarsiligi){
        dogru = dogru +1;
    }else{
        yanlis = yanlis +1;
    }
    sayac4 = sayac4+1;
    }else{
      
        alert('Dogru sayisi = ' + dogru + ' Yanlis sayisi = ' + yanlis);
    }
})
})

//sinav modulu
//kelimeleri tek tek getiren modul
devamButton.addEventListener('click',function(event){
    get(child(dbRef,'words/' + sayac3)).then((snapshot) =>{
        if(snapshot.exists()){
           // kelimelerin gelecegi html elemanlarini yaratma
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
  devamInput.style.display = "block";
  kelimelerListesi.innerHTML = ""; // Önceki kelimeyi temizleyin
  kelimelerListesi.appendChild(kelimeElemani4);
  kelimelerListesi.appendChild(kelimeElemani);
  kelimelerListesi.appendChild(kelimeElemani2);


  


  sayac3 = sayac3+1;
        }else{
            window.location.href = "app.html";
        }
    })
})

