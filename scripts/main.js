function confirmUserLogin(user){
    if (user){
        console.log(user.uid); //print the uid in the browser console
        console.log(user.displayName);  //print the user name in the browser console
        return true;
    } else {
        // No user is signed in.
        console.log ("No user is logged in");
        return false;
    }
}

function getNameFromAuth(user) {
    if (confirmUserLogin(user)){
          // Do something for the currently logged-in user here: 
          userName = user.displayName;

          //method #1:  insert with JS
          //document.getElementById("name-goes-here").innerText = userName;    

          //method #2:  insert using jquery
          $("#name-goes-here").text(userName); //using jquery

          //method #3:  insert using querySelector
          //document.querySelector("#name-goes-here").innerText = userName
    }
};
firebase.auth().onAuthStateChanged(getNameFromAuth); //run the function