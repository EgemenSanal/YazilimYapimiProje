//Databaseden gerekli bilgileri importlama

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import { getAuth,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";



//database configi

const firebaseConfig = {

  apiKey: "AIzaSyB1T5KUM_bnOcJIV6XB8Ml6zXYxqKzDYHE",

  authDomain: "fir-login-63cd9.firebaseapp.com",

  databaseURL: "https://fir-login-63cd9-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "fir-login-63cd9",

  storageBucket: "fir-login-63cd9.appspot.com", //DATABASE AD

  messagingSenderId: "73596038394",

  appId: "1:73596038394:web:474094adb57d07990bed43" // DATABASE ID

};


// Firebase'i baslatma

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const forgotPasswordButton = document.getElementById('forgotPasswordLabel');


forgotPasswordLabel = document.getElementById('forgotPasswordLabel');
//kullaniciya sifre yenileme maili gonderen modul
forgotPasswordLabel.addEventListener('click',function(event){
    const email = document.getElementById('gmail').value;
    sendPasswordResetEmail(auth,email)
  .then(() =>{
    alert("SIFRE YENILEME MAILI E POSTANIZA GONDERILDI!")
  })
  .catch((error) =>{
    console.log(error.code);
    console.log(error.message);

  })
});