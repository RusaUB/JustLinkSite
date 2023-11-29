import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { database as db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { set, get, push, update } from "firebase/database";

const DataBaseContext = React.createContext();

export const useDataBase = () => {
  return useContext(DataBaseContext);
};

function DataBaseProvider({ children }) {
  const { currentUser } = useAuth();
  const [eventsData, setEventsData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [dbLoading, setDbLoading] = useState(true);


  const [currentUserData, setCurrentUserData] = useState()


  useEffect(() => {
    if(currentUser){
      const userUidRef = ref(db, "users/" + currentUser.uid)
  
      onValue(
        userUidRef,
        (snapshot) => {
          const data = snapshot.val();
          setCurrentUserData(data);
          console.log('data =',data)
        },
        (error) => {
          console.error("Firebase onValue error:", error);
        }
      );
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const eventRef = ref(db, "courses/");

      const unsubscribeEvents = onValue(eventRef, (snapshot) => {
        const data = snapshot.val();
        setCoursesData(data);
        setDbLoading(false); // Set loading to false when events data is fetched
      });

      // Cleanup the listener when the component unmounts or when currentUser changes.
      return () => {
        unsubscribeEvents();
      };
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const eventRef = ref(db, "events/");

      const unsubscribeEvents = onValue(eventRef, (snapshot) => {
        const data = snapshot.val();
        setEventsData(data);
        setDbLoading(false); 
      });

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

  const addParticipant = (chatId, userId) => {
    if (userId) {
      // Reference to the `participants` object under the event
      const participantsRef = ref(db, `/events/${chatId}/`);
      // Check if the user is already a participant
      get(participantsRef)
        .then((snapshot) => {
          const participantsData = snapshot.val();
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
        })
        .catch((error) => {
          console.error("Error checking participant:", error);
        });
    } else {
      console.log("no user id");
    }
  };

  const addMessage = (chatId, messageId, userId, data) => {
    if (userId) {
      const messagePath = `/chats/${chatId}/messages/${messageId}`;

      // Set the message data at the specified path
      update(ref(db), {
        [messagePath]: data,
      });
    } else {
      console.log("No user ID");
    }
  };

  const value = {
    dbLoading,
    eventsData,
    currentUserEvents,
    addParticipant,
    coursesData,
    addMessage,
    currentUserData,
  };

  return (
    <DataBaseContext.Provider value={value}>
      {children}
    </DataBaseContext.Provider>
  );
}

export default DataBaseProvider;