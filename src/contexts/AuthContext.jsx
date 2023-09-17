import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext); // Use AuthContext here
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false); // Устанавливаем loading в false после завершения аутентификации
    });

    return unsubscribe;
  }, []);

  function signup(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
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
    loading
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;