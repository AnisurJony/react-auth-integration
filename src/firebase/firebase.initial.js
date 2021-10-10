
import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebase.config"


const firebaseAuthenticaton = () => {
    initializeApp(firebaseConfig)
}

export default firebaseAuthenticaton;