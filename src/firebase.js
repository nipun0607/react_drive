import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyCfqzj_VWlYWJfOxrOWI5rrmUiEcTe4J0Y",
//     authDomain: "drive-mct5.firebaseapp.com",
//     projectId: "drive-mct5",
//     storageBucket: "drive-mct5.appspot.com",
//     messagingSenderId: "149649227631",
//     appId: "1:149649227631:web:0992498e695010d6f6b29a"
//   };
  
//   const firebaseConfig = {
//     apiKey: "AIzaSyC94tpM2CdXr_llXBINt_rc09mjtQ39QOo",
//     authDomain: "g-t-drive.firebaseapp.com",
//     projectId: "g-t-drive",
//     storageBucket: "g-t-drive.appspot.com",
//     messagingSenderId: "1068820411271",
//     appId: "1:1068820411271:web:7cbc2eb65fd7aba51cd922"
//   };
const firebaseConfig = {
    apiKey: "AIzaSyC94tpM2CdXr_llXBINt_rc09mjtQ39QOo",
    authDomain: "g-t-drive.firebaseapp.com",
    projectId: "g-t-drive",
    storageBucket: "g-t-drive.appspot.com",
    messagingSenderId: "1068820411271",
    appId: "1:1068820411271:web:1b5191e28018a9a61cd922"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }