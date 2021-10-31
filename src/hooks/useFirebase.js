import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init'

initializeAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoadding, setIsLoadding] = useState(true)

    const auth = getAuth()

    const signInGoogle = () => {
        setIsLoadding(true)
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoadding(false))
    }


    const logout = () => {
        setIsLoadding(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoadding(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoadding(false)
        })
    }, [])

    return { user, error, signInGoogle, logout, isLoadding}
    
};

export default useFirebase;