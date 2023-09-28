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
  const { currentUser } = useAuth();
  const [currentUserData, setCurrentUserData] = useState();
  const [eventsData, setEventsData] = useState();
  const [dbLoding, setDbLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      // Check if currentUser is available and not loading
      const userRef = ref(db, "users/" + currentUser.uid);

      const unsubscribe = onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        setCurrentUserData(data);
        setDbLoading(false);
      });

      const eventRef = ref(db,'events/')

      const unsubscribeEvents = onValue(
        eventRef,
        (snapshot) => {
          const data = snapshot.val();
          setEventsData(data);
          setDbLoading(false); // Set loading to false when events data is fetched
        },
        (error) => {
          setError(error.message);
          setDbLoading(false);
        }
      );

      // Cleanup the listener when the component unmounts or when currentUser changes.
      return () => {unsubscribe(), unsubscribeEvents()};
    }
  }, [currentUser]);

  const value = { currentUserData, dbLoding, eventsData };

  return (
    <DataBaseContext.Provider value={value}>
      {children}
    </DataBaseContext.Provider>
  );
}

export default DataBaseProvider;