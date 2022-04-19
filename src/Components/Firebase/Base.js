import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyCx22AEwF0gWBaryZWqlOSunvjXiSGNSOg",
  authDomain: "base-reverb.firebaseapp.com",
  databaseURL: "https://base-reverb-default-rtdb.firebaseio.com",
  projectId: "base-reverb",
  storageBucket: "base-reverb.appspot.com",
  messagingSenderId: "929390391604",
  appId: "1:929390391604:web:76520fdfa33e5dacbeb561",
});

const db = getFirestore(app);

export { db };
