import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

    const createUser = (email,password) =>{
        setLoader(true)
        createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          console.log('wprrled',currentUser)
          setUser(currentUser);
          setLoader(false);
          
        });
        return () => {
          unSubscribe()
        }
      },[])

    const authInfo = {
        user,
        loader,
        createUser,

    }
    return <AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
};

export default AuthProvider;