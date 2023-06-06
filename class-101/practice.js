
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCzAW7RSKNrIrbNtwqi50t2vms5TDHz3gM",
    authDomain: "practice-activity-b2f28.firebaseapp.com",
    databaseURL: "https://practice-activity-b2f28-default-rtdb.firebaseio.com",
    projectId: "practice-activity-b2f28",
    storageBucket: "practice-activity-b2f28.appspot.com",
    messagingSenderId: "391741531529",
    appId: "1:391741531529:web:bbf05615054ad53d356d58"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}