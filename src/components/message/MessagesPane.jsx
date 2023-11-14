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
              const newId = chatMessages.length;
              const currentDate = new Date();
              const year = currentDate.getFullYear();
              const month = (currentDate.getMonth() + 1)
                .toString()
                .padStart(2, "0");
              const day = currentDate.getDate().toString().padStart(2, "0");
              const hours = currentDate.getHours().toString().padStart(2, "0");
              const minutes = currentDate
                .getMinutes()
                .toString()
                .padStart(2, "0");
              const seconds = currentDate
                .getSeconds()
                .toString()
                .padStart(2, "0");

              const isoFormattedTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

              // Update chatMessages state after adding the message
              setChatMessages((prevMessages) => [
                ...prevMessages,
                addMessage(chat.id, newId, currentUser.uid, {
                  sender: currentUser.uid,
                  content: textAreaValue,
                  timestamp: isoFormattedTime, // Keep the format as needed
                }),
              ]);

              // Reset the text area after sending the message
              setTextAreaValue("");
            }}
          />
        </Sheet>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
