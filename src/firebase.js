import {initializeApp} from "firebase/app"
import {getDocs, getDoc, doc, collection, getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_FIREBASE_SENDER_ID,
    appId:import.meta.env.VITE_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//getting the dat from firestore database

const carsCollection = collection(db, "Fleet");

export async function getCars(){
    const carsSnapshot = await getDocs(carsCollection);
    const carsArray = carsSnapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id,
    }))
    return carsArray
}