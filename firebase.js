//Copied from firebase.google.com
const firebaseConfig = {
    apiKey: "AIzaSyDPCSW4WRVbhpG41cwKj43iDca52Pftf-E",
    authDomain: "drive-57245.firebaseapp.com",
    projectId: "drive-57245",
    storageBucket: "drive-57245.appspot.com",
    messagingSenderId: "209134831605",
    appId: "1:209134831605:web:0a4e8a915857fc439fc2bc"
};

//Initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

//Setting up Google authenticatrion with Firebase
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

//Connecting firestore for database
const storage = firebase.storage()
const db = firebaseApp.firestore()

//Exporting functions
export { auth, provider, db, storage } 