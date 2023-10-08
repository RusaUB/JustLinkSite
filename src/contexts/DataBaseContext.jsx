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
  const [eventsData, setEventsData] = useState([]);
  const [dbLoading, setDbLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      const eventRef = ref(db, "events/");

      const unsubscribeEvents = onValue(eventRef, (snapshot) => {
        const data = snapshot.val();
        setEventsData(data);
        setDbLoading(false); // Set loading to false when events data is fetched
      });

      // Cleanup the listener when the component unmounts or when currentUser changes.
      return () => {
        unsubscribeEvents();
      };
    }
  }, [currentUser]);


  const value = { dbLoading, eventsData };

  return (
    <DataBaseContext.Provider value={value}>
      {children}
    </DataBaseContext.Provider>
  );
}

export default DataBaseProvider;
