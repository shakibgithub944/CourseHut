import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContexts = ({ children }) => {
    const [user, setUser] = useState('');

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
    }

    const updateUserProfile = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
            setUser(CurrentUser);

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

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;