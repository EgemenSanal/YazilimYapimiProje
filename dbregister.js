//Databaseden gerekli bilgileri importlama
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";



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

const submit = document.getElementById('submit');

const username = document.getElementById('username').value;

submit.addEventListener("click",function(event){
    
  //gerekli kullanici bilgilerini database'e kaydetme

  set(ref(db,'user/' + document.getElementById('username').value), {
    username : document.getElementById('username').value,
    email : document.getElementById('exampleInputEmail1').value
  })

    const username = document.getElementById('username').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;


  //kullaniciyi olusturma
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // kullanici olusturuldu
    const user = userCredential.user;
    window.location.href = "onaylama.html"; //kullaniciyi onaylama sayfasina gonderme
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  event.preventDefault();
})



