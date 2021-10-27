import { useEffect, useState } from 'react';
import {
    getAuth,
    signInWithPopup,

    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from '../component/Firebase/Firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    // Google sign in 
    const loginUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }




    // set user email and password 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanldeUserName = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }



    const handleRegistration = e => {
        // e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
            setError('Password Must be at least 6 Character.')
            return;
        }

        return createUserWithEmailAndPassword(auth, email, password)


    }




    const processLogedIn = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }



    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }



    // sign Out 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])



    return {

        user,
        setUser,
        setError,
        setUserName,
        error,
        hanldeUserName,
        isLoading,
        setIsLoading,

        handleRegistration,
        loginUsingGoogle,
        handleEmail,
        handlePassword,

        processLogedIn,
        logOut
    }
};

export default useFirebase;





