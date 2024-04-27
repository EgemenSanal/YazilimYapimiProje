//Databaseden gerekli bilgileri importlama

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";



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


const submit = document.getElementById('girisButon');
//kullanici giris yaptigi zaman databaseden sorgulatma
submit.addEventListener("click",function(event){
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // kullanici giris yapti
      
      const user = userCredential.user;
      window.location.href = "app.html"; //kullaniciyi uygulama sayfasina gonder
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  event.preventDefault();
})



