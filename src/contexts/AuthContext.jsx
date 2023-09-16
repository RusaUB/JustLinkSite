import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext); // Use AuthContext here
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate()

  function signup(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(
          errorCode
            .split("/")[1]
            .replace(/-/g, " ")
            .replace(/\b\w/g, (match) => match.toUpperCase())
        );
      });
  }

  const value = {
    currentUser,
    signup,
    error,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;