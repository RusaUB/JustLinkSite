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

export default function MessagesPane({ chat }) {
  const [chatMessages, setChatMessages] = React.useState(chat.messages);
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const { currentUser } = useAuth();

  React.useEffect(() => {
    setChatMessages(chat.messages);
  }, [chat.messages]);

  

  const [senderData, setSenderData] = React.useState([]);

  React.useEffect(() => {
    const userUidRef = ref(db, "users/" + chat.sender);
    onValue(userUidRef, (snapshot) => {
      const data = snapshot.val();
      setSenderData(data);
    });
  }, [chat.sender])

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
                const isYou = message.sender === currentUser.uid;
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
            onSubmit={() => {
              const newId = chatMessages.length + 1;
              const newIdString = newId.toString();
              setChatMessages([
                ...chatMessages,
                {
                  id: newIdString,
                  sender: "You",
                  content: textAreaValue,
                  timestamp: "Just now",
                },
              ]);
            }}
          />
        </Sheet>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
