import  {useContext,createContext,useEffect,useState} from "react";
import {createUserWithEmailAndPassword, 
    onAuthStateChanged, signInWithEmailAndPassword, 
    signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

import {auth} from "../firebase"    

const AuthConext=createContext();

export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState(null)

    const googleSignIn =()=>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
    }

    const logOut = () =>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
             setUser(currentUser);

         })
         return ()=> unsubscribe();
     },[user])

    return (
    <AuthConext.Provider value={{user,googleSignIn,logOut}}>{children}</AuthConext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthConext)
}