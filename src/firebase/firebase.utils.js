
//gives us access to firestore and auth
import firebase from 'firebase/app'
import 'firebase/auth'
// for the databse
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyAQW6g3Fuej0MiGbCKIGzlJwlLbNPLVnsg",
    authDomain: "crwn-db-21edf.firebaseapp.com",
    databaseURL: "https://crwn-db-21edf.firebaseio.com",
    projectId: "crwn-db-21edf",
    storageBucket: "crwn-db-21edf.appspot.com",
    messagingSenderId: "630259816933",
    appId: "1:630259816933:web:caa69431529893c576f70c",
    measurementId: "G-W9MEC6T72T"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()



const provider = new firebase.auth.GoogleAuthProvider()
// we want to aslway trigger the google pop=up whenever we use the google auth provider for authentication and sign in
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;