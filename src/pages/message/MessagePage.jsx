import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import MessagesPane from "../../components/message/MessagesPane";
import ChatsPane from "../../components/message/ChatsPane";

import { database as db } from "../../firebase";

import { ref, onValue } from "firebase/database";

import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function MyProfile() {
  const [chatData, setChatData] = React.useState([]);
  const [selectedChat, setSelectedChat] = React.useState();
  const currentUser = useAuth();

useEffect(() => {
  if (currentUser) {
    const chatsRef = ref(db, "chats/");

    const unsubscribeChats = onValue(chatsRef, (snapshot) => {
      const data = snapshot.val();

      // Filter chats where currentUser is the sender or receiver
      const filteredChats = data.filter(
        (chat) =>
          chat.sender === currentUser.currentUser.uid ||
          chat.receiver === currentUser.currentUser.uid
      );

      setChatData(filteredChats);

      // Check if selectedChat is from the filteredChats
      const chatExists = filteredChats.some(
        (chat) => chat.id === selectedChat?.id
      );

      // Check if data is not empty and if the selectedChat still exists in filteredChats
      if (filteredChats.length > 0 && chatExists) {
        setSelectedChat(
          filteredChats.find((chat) => chat.id === selectedChat.id)
        );
      } else if (filteredChats.length > 0) {
        // If selectedChat doesn't exist anymore, set the first chat from filteredChats
        setSelectedChat(filteredChats[0]);
      } else {
        setSelectedChat(null); // No chats available
      }
    });

    // Cleanup the listener when the component unmounts or when currentUser changes.
    return () => {
      unsubscribeChats();
    };
  }
}, [currentUser, selectedChat]);


  return (
    <>
      {chatData && selectedChat ? (
        <Sheet
          sx={{
            flex: 1,
            width: "100%",
            mx: "auto",
            pt: { xs: "var(--Header-height)", sm: 0 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "minmax(min-content, min(30%, 400px)) 1fr",
            },
          }}
        >
          <Sheet
            sx={{
              position: {
                xs: "fixed",
                sm: "sticky",
              },
              transform: {
                xs: "translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))",
                sm: "none",
              },
              transition: "transform 0.4s, width 0.4s",
              zIndex: 100,
              width: "100%",
              top: 52,
            }}
          >
            <ChatsPane
              chats={chatData}
              selectedChatId={selectedChat.id}
              setSelectedChat={setSelectedChat}
            />
          </Sheet>
          <MessagesPane chat={selectedChat} />
        </Sheet>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
