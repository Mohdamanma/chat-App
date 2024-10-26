import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth/cordova";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCbPRg3I0yOa4HmBXxGp0wao6MRrXesh9U",
  authDomain: "chat-app-js-1b53f.firebaseapp.com",
  projectId: "chat-app-js-1b53f",
  storageBucket: "chat-app-js-1b53f.appspot.com",
  messagingSenderId: "259369630959",
  appId: "1:259369630959:web:6f2fb185d6c8446faa6f1a",
  measurementId: "G-981GQSCHDE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

export const signup = async ({ name, password, email }) => {
  try {
    console.log("SignUp :", name)
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await setDoc(doc(db, 'users', user.uid), {
      id: user.uid,
      username: name.toLowerCase(),
      email: email,
      name: '',
      avatar: '',
      bio: 'Hey,There i am using ChatApp',
      lastSeen: Date.now()
    })
    await setDoc(doc(db, 'chats', user.uid), {
      chatdata: []
    })
    toast.success('signUp Sucessfully')
    nav
  } catch (error) {
    console.log(error)
    toast.error(error.code)
  }
}

export const login = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    toast.success('Login Sucessfully')
  } catch (error) {
    toast.error(error.code)
  }
}