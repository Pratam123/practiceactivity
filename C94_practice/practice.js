var firebaseConfig = {
    apiKey: "AIzaSyDlxqtCFXc29xiAUOhXqPa7BXAMjvVXiSI",
    authDomain: "praticeactivity.firebaseapp.com",
    databaseURL: "https://praticeactivity-default-rtdb.firebaseio.com",
    projectId: "praticeactivity",
    storageBucket: "praticeactivity.appspot.com",
    messagingSenderId: "118515393636",
    appId: "1:118515393636:web:6c1270fa527bd9bae62b71",
    measurementId: "G-4DTE78WGVD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}