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
    
    
    
     


     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

     function addroom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose:"adding room name"
           });
           localStorage.setItem("room_name",room_name);
           window.location="kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();







function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}



function logout(){


      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}






