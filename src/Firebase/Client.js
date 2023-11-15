import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    
    apiKey: "AIzaSyDVHe41dns4_gCHyG5TdbKWTjcvKgINnmo",
    authDomain: "thepadelstore-e0617.firebaseapp.com",
    projectId: "thepadelstore-e0617",
    storageBucket: "thepadelstore-e0617.appspot.com",
    messagingSenderId: "864499422978",
    appId: "1:864499422978:web:c96f270ef951badf00d41b"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);