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

const addParticipant = (eventId, userId) => {
  if (userId) {
    // Reference to the `participants` object under the event
    const participantsRef = ref(db, `events/${eventId}/participants`);

    // Check if the user is already a participant
    get(participantsRef)
      .then((snapshot) => {
        const participantsData = snapshot.val();

        // Check if the user is already a participant in the event
        if (
          !participantsData ||
          !Object.values(participantsData).includes(userId)
        ) {
          // Push a new child with the value of the user ID
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
        } else {
          console.log(
            `User ${userId} is already a participant in event ${eventId}`
          );
        }
      })
      .catch((error) => {
        console.error("Error checking participant:", error);
      });
  } else {
    console.log("No user ID");
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