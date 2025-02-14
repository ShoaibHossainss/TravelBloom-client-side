import { createContext,useEffect,useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";




export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (name,photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('wprrled',currentUser)
        setUser(currentUser);
       if(currentUser){
          const userInfo = {email : currentUser?.email}
          axiosPublic.post('/jwt',userInfo,{withCredentials : true})
          .then(res=>{
            if(res.data.token){
                localStorage.setItem('access-token', res.data.token)
            }
          })
       }
       else{
         localStorage.removeItem('access-token')
         
       }
       setLoading(false);
      });
      return () => {
        unSubscribe()
      }
    },[axiosPublic])

    const authInfo = {
         user,
         loading,
         createUser,
         signIn,
         logOut,
         updateUser,
         googleSignIn


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;