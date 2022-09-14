import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCNs2DLbYPe57TOHy_B9md-hn3aza7WuLc",
    authDomain: "chat-app-a3c23.firebaseapp.com",
    projectId: "chat-app-a3c23",
    storageBucket: "chat-app-a3c23.appspot.com",
    messagingSenderId: "703246873421",
    appId: "1:703246873421:web:2a93945506a1c50ad67d04",
    measurementId: "G-DMSVEZ38XJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;