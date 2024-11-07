import { createContext, useContext, useEffect, useState } from "react";
import { User, UserLogin, UserRegister } from "@/src/utils/types";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, firestoreDB } from "@/firebaseConfig";
import {doc, getDoc, setDoc} from "firebase/firestore"

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (userLogin: UserLogin) => void;
    logout: () => void;
    register: (userRegister: UserRegister) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: {children: React.ReactNode}) => {

  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser({
          email: user.email || "",
          username: user.displayName || "",
          profileUrl: user.photoURL || ""
        })
        setIsAuthenticated(true)
      } else {
        setUser(null)
        setIsAuthenticated(false)
      }
      console.log(user)
    })
    return unsub
  }, [])

  const login = async (userLogin: UserLogin) => {
    try{

    } catch (e) {
      
    }
  }

  const logout = async () => {
    try {

    } catch (e) {

    }
  }

  const register = async (userRegister: UserRegister) => {
    console.log(userRegister)
    try {
      const response = await createUserWithEmailAndPassword(firebaseAuth, userRegister.email, userRegister.password)
      console.log('response.user: ', response.user)

      await setDoc(doc(firestoreDB, 'users', response?.user?.uid), {
        username: userRegister.username,
        profileUrl: userRegister.profileUrl
      })

      return {succes: true, data: response?.user}
    } catch (e) {
      return {succes: false, msg: e}
    }
  }



  return (
    <AuthContext.Provider value={{
        user,
        isAuthenticated,
        login,
        logout,
        register
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const values = useContext(AuthContext);

  if (!values) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return values;
}