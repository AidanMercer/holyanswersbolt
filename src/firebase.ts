import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut 
} from 'firebase/auth'
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  deleteDoc,
  doc,
  updateDoc,
  orderBy
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBJRAaALwjg5wc-AlUp9EKl2p9KZ_6pFZE",
  authDomain: "galvanic-style-402121.firebaseapp.com",
  projectId: "galvanic-style-402121",
  storageBucket: "galvanic-style-402121.firebasestorage.app",
  messagingSenderId: "155523642474",
  appId: "1:155523642474:web:a6c150d7f2ca6d9452c613",
  measurementId: "G-LB6KT5LMDR"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

export { 
  app, 
  auth, 
  db,
  googleProvider, 
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
  signInWithPopup,
  firebaseSignOut as signOut
}
