// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkxtCahEjLr0kgBBeoIMTEKKlO5GbY_NE",
  authDomain: "login-5e21f.firebaseapp.com",
  projectId: "login-5e21f",
  storageBucket: "login-5e21f.appspot.com",
  messagingSenderId: "525022589356",
  appId: "1:525022589356:web:668e7d7ad0c64d5ecc0a09"
};

// Initialize Firebase
if(!firebase.apps.length)
{
 firebase.initializeApp(firebaseConfig);
}
const auth=firebase.auth();

export{auth};