import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserContexts = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // create New user.
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in function
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign out function
    const logOut = () => {
        setLoading(true);
        signOut(auth)
    }

    // User name and photo update function
    const updateUserProfile = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    // Google sign fuction
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // GitHub sign in function
    const gitHubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }
    
    // Onauth state change for get the loged in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
            setUser(CurrentUser);
            setLoading(false)


        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        createNewUser,
        logIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        gitHubSignIn,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;