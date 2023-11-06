import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
       return signOut(auth)

    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,CurrentUser=>{
            const userEmail = CurrentUser?.email || user?.email
            const loggedUser = {userEmail}
            setUser(CurrentUser)
            setLoading(false)
            
            
        })
        return ()=>{
            unsubscribe()
        }

    },[])
    const authInfo ={loading,user,createUser,signIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;