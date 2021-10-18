import firebase from 'firebase/compat/app'
import  'firebase/compat/auth';
import 'firebase/compat/firestore'
import'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDPt2lZLDPzVCHAkBEi_ZJdWe0E7SiTbYA",
    authDomain: "shopping-cart-986fa.firebaseapp.com",
    projectId: "shopping-cart-986fa",
    storageBucket: "shopping-cart-986fa.appspot.com",
    messagingSenderId: "825187319115",
    appId: "1:825187319115:web:f93c5562af585b85febcce"
  };
  
  export default firebase.initializeApp(firebaseConfig) 