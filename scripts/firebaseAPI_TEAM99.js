//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBAfnNHhRVBe9fHKAlhQ9EbX7XvUtHlXcs",
    authDomain: "comp1800-cbuchan-demo.firebaseapp.com",
    projectId: "comp1800-cbuchan-demo",
    storageBucket: "comp1800-cbuchan-demo.appspot.com",
    messagingSenderId: "999978481776",
    appId: "1:999978481776:web:a17c0cedb1ba57affbdcb5"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
