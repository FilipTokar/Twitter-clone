import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbMs023NYeqzrwO-pZyuxRvb71gnl9it4",
    authDomain: "twitter-clone-86ec5.firebaseapp.com",
    projectId: "twitter-clone-86ec5",
    storageBucket: "twitter-clone-86ec5.appspot.com",
    messagingSenderId: "772519316868",
    appId: "1:772519316868:web:17a24ba834348cdf1ba1d1"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export default db