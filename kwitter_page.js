//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB0x1CLRBpRiqBnjiK4WLWR3C74MoYc9MQ",
      authDomain: "twitter-662ef.firebaseapp.com",
      databaseURL: "https://twitter-662ef-default-rtdb.firebaseio.com",
      projectId: "twitter-662ef",
      storageBucket: "twitter-662ef.appspot.com",
      messagingSenderId: "74270092410",
      appId: "1:74270092410:web:d3511d732b0b72c93e1fc3",
      measurementId: "G-DJKX8BSVT1"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}



function logout(){


      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
