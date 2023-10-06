 const firebaseConfig = {
    apiKey: "AIzaSyBSay4FMVmIKjp8GOaEHpjtoMRY7LF_Tp0",
    authDomain: "lspip-e5271.firebaseapp.com",
    databaseURL: "https://lspip-e5271-default-rtdb.firebaseio.com",
    projectId: "lspip-e5271",
    storageBucket: "lspip-e5271.appspot.com",
    messagingSenderId: "385758160874",
    appId: "1:385758160874:web:49fa0154edd368b46df493"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("providerDetails");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var fName = getElementById('r1');
    var lName = getElementById('r2');
    var eName = getElementById('r3');
    var job = document.getElementsByName('job')
    var sName = ""
   for(let i = 0; i< job.length; i++){
      if(job[i].checked){
        sName = job[i].value;
      }
   }
    var exp = getElementById('r5');
    var avail = getElementById('r6');
    var city = getElementById('r7');
    var locality = getElementById('r8');
    var contact = getElementById('r9');

    saveMessages ( fName,lName,eName,sName,exp,avail,city,locality,contact);

    document.querySelector('.alert').style.display = "block";

    //alert removing
    setTimeout(() => {
      document.querySelector('.alert').style.display = "none";
    }, 3000);

    //reset form
    document.getElementById("contactForm").reset();
  }

    const saveMessages = ( fName,lName,eName,sName,exp,avail,city,locality,contact) =>{
     var newContactForm = contactFormDB.push();

     newContactForm.set({
      fName : fName,
      lName:lName,
      sName : sName,
      eName : eName,
      exp : exp,
      avail : avail,
      city : city,
      locality : locality,
      contact : contact,
     })
  }

  const getElementById=(id) =>{

    return document.getElementById(id).value;
  };
