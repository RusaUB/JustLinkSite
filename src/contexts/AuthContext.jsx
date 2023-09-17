import React, { useContext, useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithCustomToken,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext); // Use AuthContext here
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const savedToken = sessionStorage.getItem("userToken");

  if (savedToken) {
    // Повторная аутентификация с использованием сохраненного токена
    signInWithCustomToken(auth, savedToken)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser();
        navigate("/");
      })
      .catch((error) => {
        // Обработка ошибок, если повторная аутентификация не удалась
        console.error("Ошибка повторной аутентификации:", error);
        // Очистите сохраненный токен из sessionStorage
        // sessionStorage.removeItem("userToken");
      });
  }
  function signup(email, password) {
    !currentUser &&
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          auth.currentUser
            .getIdToken()
            .then((idToken) => sessionStorage.setItem("userToken", idToken));
          setCurrentUser(user);
          navigate("/");
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