var firebaseConfig = {
    apiKey: "AIzaSyATVUIn9Qn-4PSf51AvxhSdHTCJBJ17U4w",
    authDomain: "project2-d362d.firebaseapp.com",
    databaseURL: "https://project2-d362d.firebaseio.com",
    projectId: "project2-d362d",
    storageBucket: "project2-d362d.appspot.com",
    messagingSenderId: "227420162970",
    appId: "1:227420162970:web:d0d6c0a5544f806958c823"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
//   var auth = firebase.auth();
//   auth.signInWithEmailAndPassword(email, password);
//   auth.createUserWithEmailAndPassword(email, password);
//   auth.signOut(firebaseUser => { });
//   var promise = auth.signInWithEmailAndPassword(email, pass)

  // Initial Values
  
  var txtEmail = document.getElementById("email");
  var txtPassword = document.getElementById("password");
  var btnSignUp = document.getElementById("create");
  var btnLogin = document.getElementById("sign");
  var btnLogout = document.getElementById("out");

 


  btnSignUp.addEventListener('click', function (e) {
    var email = txtEmail.value;
    var password = txtPassword.value;
    var auth = auth.createUserWithEmailAndPassword(email, pass)
    promise.catch(e => console.log(e.message))
  })
  
  btnLogin.addEventListener('click', function (e) {
      var email = txtEmail.value;
      var pass = txtPassword.value;
      var auth = auth.signInWithEmailAndPass(email, password);
      promise.catch(e => console.log(e.message))
  })
    btnLogout.addEventListener('click', function (e) {
       var auth = firebase.auth().signOut();
    })
  
  // Global Observer for when user's sign in state changes
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
         console.log(firebaseUser)
         btnLogout.classList.remove('hide');
      } else {
          console.log('not signed in')
          btnLogout.classList.add('hide');
      }
  });