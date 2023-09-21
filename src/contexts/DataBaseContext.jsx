// DataBaseContext.js
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { database as db } from "../firebase";
import { ref, onValue } from "firebase/database";

const DataBaseContext = React.createContext();

export const useDataBase = () => {
  return useContext(DataBaseContext);
};

function DataBaseProvider({ children }) {
  const { currentUser, loading } = useAuth();
  const [currentUserData, setCurrentUserData] = useState();
    const [dbLoding,setDbLoading] = useState(true)
  useEffect(() => {
    if (currentUser && !loading) {
      // Check if currentUser is available and not loading
      const userRef = ref(db, "users/" + currentUser.uid);

      const unsubscribe = onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        setCurrentUserData(data);
        setDbLoading(false)
      });

      // Cleanup the listener when the component unmounts or when currentUser changes.
      return () => unsubscribe();
    } else {
      // If there is no currentUser or still loading, set userData to null.
      setCurrentUserData(null);
    }
  }, [currentUser, loading]);

  const value = { currentUserData, dbLoding };

  return (
    <DataBaseContext.Provider value={value}>
      {children}
    </DataBaseContext.Provider>
  );
}

export default DataBaseProvider;