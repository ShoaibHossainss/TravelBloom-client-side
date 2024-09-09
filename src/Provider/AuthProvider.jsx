import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user)
    const [loader,setLoader]=useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoader(true)
        createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
      setLoader(true)
      return signInWithEmailAndPassword(auth,email,password)

  }
   
  const googleSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider)
}

const updateUser = (name,photo) => {
  updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
}

const logOut = ()=>{
  setLoader(true)
  return signOut(auth)
}

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          console.log('success',currentUser)
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
        signIn,
        googleSignIn,
        updateUser,
        logOut
    }
    return <AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
};

export default AuthProvider;