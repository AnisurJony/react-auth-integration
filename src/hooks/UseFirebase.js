import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from "react"
import firebaseAuthenticaton from "../firebase/firebase.initial";

firebaseAuthenticaton();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const signInUsingGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })


    }

    const signInWithGithub = () => {

        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
        // .catch(error => {
        //     setError(error.message);
        // })


    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user)
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        signInWithGithub,
        logOut,

    }

}


export default useFirebase;