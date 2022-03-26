
var firebaseConfig = {
      apiKey: "AIzaSyDUvvrGdP6VK1wPwuaXoY27BBch_bHK6Us",
      authDomain: "kwitter-e6159.firebaseapp.com",
      projectId: "kwitter-e6159",
      storageBucket: "kwitter-e6159.appspot.com",
      messagingSenderId: "890706761881",
      appId: "1:890706761881:web:11a43b014aafde3b314008",
      measurementId: "G-8S7P5Q70BP"
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





