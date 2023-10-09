import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { database as db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { set, get, push } from "firebase/database";


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


    const currentUserEvents = eventsData.filter(
      (event) =>
        event.participants &&
        Object.values(event.participants).includes(currentUser.uid)
    );

    const addParticipant = (eventId, userId) => {
      if (userId) {
        // Reference to the `participants` object under the event
        const participantsRef = ref(db, `/events/${eventId}/participants`);
        // Check if the user is already a participant
        get(participantsRef)
          .then((snapshot) => {
            const participantsData = snapshot.val();

            if (
              participantsData &&
              Object.values(participantsData).includes(userId)
            ) {
              console.log(
                `User ${userId} is already a participant of event ${eventId}`
              );
            } else {
              // Push a new child with an auto-generated key and set the value to the user ID
              const newParticipantRef = push(participantsRef);
              set(newParticipantRef, userId)
                .then(() => {
                  console.log(
                    `User ${userId} added to the participants of event ${eventId}`
                  );
                })
                .catch((error) => {
                  console.error("Error adding participant:", error);
                });
            }
          })
          .catch((error) => {
            console.error("Error checking participant:", error);
          });
      } else {
        console.log("no user id");
      }
    };


  const value = { dbLoading, eventsData, currentUserEvents, addParticipant };

  return (
    <DataBaseContext.Provider value={value}>
      {children}
    </DataBaseContext.Provider>
  );
}

export default DataBaseProvider;
