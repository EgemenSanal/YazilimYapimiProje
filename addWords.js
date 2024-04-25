import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import { getAuth,} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";




const firebaseConfig = {

  apiKey: "AIzaSyB1T5KUM_bnOcJIV6XB8Ml6zXYxqKzDYHE",

  authDomain: "fir-login-63cd9.firebaseapp.com",

  databaseURL: "https://fir-login-63cd9-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "fir-login-63cd9",

  storageBucket: "fir-login-63cd9.appspot.com",

  messagingSenderId: "73596038394",

  appId: "1:73596038394:web:474094adb57d07990bed43"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const kelime = document.getElementById('kelimeOnay');
const goster = document.getElementById('kelimeGoster');

kelime.addEventListener('click',function(event){
    //kelimeyi database'e ekleme
    set(ref(db,'user/words/' + document.getElementById('kelimeGiris').value), {
        kelime : document.getElementById('kelimeGiris').value,
        createTime : Date.now()
      })
      event.preventDefault();
})