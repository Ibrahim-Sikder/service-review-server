import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,} from 'firebase/auth';

import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const googleAuthProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
     const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

     const login = (email, password ) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
     }
     const logOut = () =>{
        return signOut(auth)
     }

     const GoogleLogin = (email, password) =>{
        return signInWithPopup(auth, googleAuthProvider)
     }
     useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
             console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            return unsubscribe()
        }
     },[])
  

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        GoogleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;