import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";
import MessagesPaneHeader from "./MessagesPaneHeaderProps";
import { useAuth } from "../../contexts/AuthContext";

import { ref, onValue } from "firebase/database";

import { database as db } from "../../firebase";
import { useDataBase } from "../../contexts/DataBaseContext";

export default function MessagesPane({ chat }) {
  const [chatMessages, setChatMessages] = React.useState(chat.messages);
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const { currentUser } = useAuth();

  const [senderData, setSenderData] = React.useState([]);

  const { addMessage } = useDataBase();

  React.useEffect(() => {
    setChatMessages(chat.messages);
  }, [chat.messages]);

  React.useEffect(() => {
    const userUidRef =
      currentUser.uid == chat.sender
        ? ref(db, "users/" + chat.receiver)
        : ref(db, "users/" + chat.sender);

    onValue(
      userUidRef,
      (snapshot) => {
        const data = snapshot.val();
        setSenderData(data);
      },
      (error) => {
        console.error("Firebase onValue error:", error);
      }
    );
  }, [chat.sender]);

  return (
    <>
      {chat ? (
        <Sheet
          sx={{
            height: { xs: "calc(100dvh - var(--Header-height))", lg: "100dvh" },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.level1",
          }}
        >
          <MessagesPaneHeader sender={senderData} />
          <Box
            sx={{
              display: "flex",
              flex: 1,
              minHeight: 0,
              px: 2,
              py: 3,
              overflowY: "scroll",
              flexDirection: "column-reverse",
            }}
          >
            <Stack spacing={2} justifyContent="flex-end">
              {chatMessages.map((message, index) => {
                const isYou = message?.sender === currentUser.uid;
                return (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={2}
                    flexDirection={isYou ? "row-reverse" : "row"}
                  >
                    <ChatBubble
                      variant={isYou ? "sent" : "received"}
                      {...message}
                    />
                  </Stack>
                );
              })}
            </Stack>
          </Box>
          <MessageInput
            textAreaValue={textAreaValue}
            setTextAreaValue={setTextAreaValue}
            onSubmit={async () => {
              const newMessage = {
                sender: currentUser.uid,
                content: textAreaValue,
                timestamp: new Date().toISOString(), // Use the current time for the timestamp
              };

              try {
                // Add the message to the database
                const addedMessage = await addMessage(chat.id, newMessage); // Assuming addMessage handles adding the message properly

                // Update chatMessages state after adding the message
                setChatMessages((prevMessages) => [
                  ...prevMessages,
                  addedMessage,
                ]);
                setTextAreaValue("");
              } catch (error) {
                console.error("Error adding message:", error);
              }
            }}
          />
        </Sheet>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
