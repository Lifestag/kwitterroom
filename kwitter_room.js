
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCo9fKRJe4WPX6k5FhEClhMDqrCloELrxg",
      authDomain: "classtest-8b002.firebaseapp.com",
      projectId: "classtest-8b002",
      storageBucket: "classtest-8b002.appspot.com",
      messagingSenderId: "505886805270",
      appId: "1:505886805270:web:d6c1fb814c251a73921437"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
getData();
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
});});}
function addRoom()
{
  room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose : "adding Room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirecToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "kwitter.html";

}