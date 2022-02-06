//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD9mQnBm4O40C_CIXF89rBXVFceFRFi7Lw",
    authDomain: "kwitter-bc148.firebaseapp.com",
    databaseURL: "https://kwitter-bc148-default-rtdb.firebaseio.com",
    projectId: "kwitter-bc148",
    storageBucket: "kwitter-bc148.appspot.com",
    messagingSenderId: "200000766482",
    appId: "1:200000766482:web:5f43d11ae57771eec5cecb"
  };
  
firebase.initializeApp(firebaseConfig);

var user_name =localStorage.getItem("username");
var room_name = localStorage.getItem("roomname");

function send(){
      var msg = document.getElementById("msg_textbox").value;
      firebase.database().ref(room_name).push({
            name: user_name, message: msg, like: 0
      });
      document.getElementById("msg_textbox").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();



function logout() {
    localStorage.removeItem("user name");
    localStorage.removeItem("roomname");
    window.location.replace("LetsChatLogin.html");

}