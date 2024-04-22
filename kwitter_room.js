const firebaseConfig = {
    apiKey: "AIzaSyCWiVqUHjp15mqeHgAfj_Knesi18vzzpn8",
    authDomain: "kwitteprojeto92.firebaseapp.com",
    databaseURL: "https://kwitteprojeto92-default-rtdb.firebaseio.com",
    projectId: "kwitteprojeto92",
    storageBucket: "kwitteprojeto92.appspot.com",
    messagingSenderId: "179069412273",
    appId: "1:179069412273:web:ebd382df545288b63c5390"
  };

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")

  document.getElementById("user_name").innerHTML="bem vindo(a), "+user_name+" !"

  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adicionando o nome da sala "
    })
    localStorage.setItem("room_name",room_name)
    window.location="kwitter_page.html"

  }
  function getData(){
    firebase.database().ref("/").on("value",function(snapshot){
      document.getElementById("output").innerHTML="";
      snapshot.forEach(function(childSnapshot){
        childKey=childSnapshot.key;
        Room_names=childKey;
        console.log(Room_names)
        row="<div class='room_name' id="+Room_names+" onclick=' redirect(this.id)'>#"+Room_names+"</div><hr>"
        document.getElementById("output").innerHTML+=row
      })
      
    })
  }
  getData()
  function redirect(name){
    console.log(name);
    localStorage.setItem("room_name",name)
    window.location="kwitter_page.html"

  }
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
  