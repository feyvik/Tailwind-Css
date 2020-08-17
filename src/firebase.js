import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjMip5chPKSKACje0CiTjb23xS4RmuZ_0",
  authDomain: "invoice-app-24826.firebaseapp.com",
  databaseURL: "https://invoice-app-24826.firebaseio.com",
  projectId: "invoice-app-24826",
  storageBucket: "invoice-app-24826.appspot.com",
  messagingSenderId: "314164180882",
  appId: "1:314164180882:web:54b409bb25f0f23b81b34b"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export { fire };
