import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBSay4FMVmIKjp8GOaEHpjtoMRY7LF_Tp0",
    authDomain: "lspip-e5271.firebaseapp.com",
    databaseURL: "https://lspip-e5271-default-rtdb.firebaseio.com",
    projectId: "lspip-e5271",
    storageBucket: "lspip-e5271.appspot.com",
    messagingSenderId: "385758160874",
    appId: "1:385758160874:web:49fa0154edd368b46df493"
  };

  const app= initializeApp(firebaseConfig);
  const database=getDatabase(app);
  const auth = getAuth();
  console.log(app);
  const reg = document.getElementById("register")
  reg.addEventListener("click", (e) => {
    e.preventDefault();
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var email = document.getElementById('email').value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("user created");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);

      alert(error);
      // ..
    });
  });