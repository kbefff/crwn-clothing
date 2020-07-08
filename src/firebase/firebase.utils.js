
//gives us access to firestore and auth
import firebase from 'firebase/app';
import 'firebase/auth';
// for the databse
import 'firebase/firestore';


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

// functina llows uto take user auth and store ind b
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // our function has to make sure we're getting back a valid object so we can only sign out when we are signed in
    if (!userAuth) {
        return;    
    };

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // if tere is no user, create one
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        };
    };

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()



const provider = new firebase.auth.GoogleAuthProvider();
// we want to aslway trigger the google pop=up whenever we use the google auth provider for authentication and sign in
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;