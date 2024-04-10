import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config'


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //create user
    const cerateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //sign in with google'
    const sighInWithGoogle=(googleProvider)=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    //sign in with github'
    const sighInWithGithub=(githubProvider)=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider);
    }

    //Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Objerving current User inside useEffect of AuthProvider", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    //logout user
    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }







    const authInfo = {
        user,
        loading,
        cerateUser,
        signInUser,
        sighInWithGoogle,
        sighInWithGithub,
        logOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}