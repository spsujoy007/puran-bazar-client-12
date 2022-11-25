import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singOut = () => {
        setLoading(true);
        return signOut(auth)
    } 

    // const updateUser = (userInfo) => {
    //     setLoading(true);
    //     return updateProfile(auth.currentUser, userInfo)
    // }

    const googleSignPop = () => {
        return signInWithPopup(auth, googleProvider)
    }

    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User observed')
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        singIn,
        singOut,
        googleSignPop
        // updateUser,
        // loading,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;