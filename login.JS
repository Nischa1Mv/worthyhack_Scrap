import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";


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
  const auth = getAuth();
  console.log(app);
  document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    var email =  document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      window.location.assign("../home/home.html")
      document.getElementById('logout').style.display = 'block';
    })
    // .catch((error) => {
    //   const errorMessage = error.message;
    //   console.log(errorMessage);
    //   alert(errorMessage);
    // });		  		  
});