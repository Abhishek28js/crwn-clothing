import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCy_OesrhtJMxIQwkoPAckQgKIuMe1ESiM",
    authDomain: "crwn-db-ce893.firebaseapp.com",
    databaseURL: "https://crwn-db-ce893.firebaseio.com",
    projectId: "crwn-db-ce893",
    storageBucket: "crwn-db-ce893.appspot.com",
    messagingSenderId: "332466265733",
    appId: "1:332466265733:web:4b1787ccaf6b7ca6c0d3ec",
    measurementId: "G-WHN3773R65"
  }

  firebase.initializeApp(config);

  export const createUserProfileDocument= async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    if(!snapShot.exist){
      const {displayName,email}=userAuth;
      const createdAt=new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log("error storing user",error.message)
      }
     

    }
    return userRef;
  }

  export const firestore=firebase.firestore();
  export const auth=firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:'select_account'
  });

  export const SignInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;