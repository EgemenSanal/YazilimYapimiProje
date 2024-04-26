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


const kelimeEklebutton = document.getElementById('kelimeEkle');
var sayac = 1;
sayac = JSON.parse(localStorage.getItem('sayac'));

kelimeEklebutton.addEventListener('click',function(event){
    
    set(ref(db,'words/' + sayac), {
        ingKelime : document.getElementById('yeniingilizcekelime').value,
        turkceKarsiligi : document.getElementById('turkcekarsiligi').value,
        cumle : document.getElementById('sentences').value,
        resimUrl : document.getElementById('imageText').value
      })

      sayac = sayac+1;
      localStorage.setItem('sayac', sayac);
      event.preventDefault();
      
});

const kelimeGetir = document.getElementById('anladim');

var sayac2 = 1;
kelimeGetir.addEventListener('click',function(event){
    const dbRef = ref(db);
    get(child(dbRef,'words/' + sayac2)).then((snapshot) =>{
        if(snapshot.exists()){
            const kelimeElemani = document.createElement('kelime-ingilizce');
            const kelimeElemani2 = document.createElement('kelime-turkce');
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
  kelimeElemani2.innerHTML = `
  <p>${snapshot.val().turkceKarsiligi}</p>
`;
kelimeElemani4.innerHTML = `
  <img src="${snapshot.val().resimUrl}" alt="${snapshot.val().ingKelime}" class="card-img-top">
  `;
kelimeElemani3.innerHTML = `
    <p2>${snapshot.val().cumle}</p2>
  `;
kelimelerListesi.innerHTML = ""; // Önceki kelimeyi temizleyin
kelimelerListesi.appendChild(kelimeElemani4);
  kelimelerListesi.appendChild(kelimeElemani);
  kelimelerListesi.appendChild(kelimeElemani2);
  kelimelerListesi.appendChild(kelimeElemani3);
  


  
  sayac2 = sayac2+1;
        }else{
            alert('KELIME YOK!')
        }
    })
    
})
