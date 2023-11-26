import * as React from "react";
import Box from "@mui/joy/Box";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import AvatarWithStatus from "./AvatarWithStatus";
import { toggleMessagesPane } from "../../utils";

import { useAuth } from "../../contexts/AuthContext";

import { ref, onValue } from "firebase/database";

import { database as db } from "../../firebase";
import { useDataBase } from "../../contexts/DataBaseContext";

export default function ChatListItem({
  id,
  sender,
  receiver,
  messages,
  selectedChatId,
  setSelectedChat,
}) {
  const selected = selectedChatId === id;
  const [senderInfo, setSenderInfo] = React.useState([])
  const currentUser = useAuth();

    React.useEffect(() => {
      if (currentUser) {
        const userUidRef = ref(db, "users/" + sender);

        onValue(
          userUidRef,
          (snapshot) => {
            const data = snapshot.val();
            setSenderInfo(data);
          },
          (error) => {
            console.error("Firebase onValue error:", error);
          }
        );
      }
    }, []);

  return (
    <React.Fragment>
      <ListItem>
        <ListItemButton
          onClick={() => {
            toggleMessagesPane();
            setSelectedChat({ id, sender, receiver, messages });
          }}
          selected={selected}
          color="neutral"
          sx={{
            flexDirection: "column",
            alignItems: "initial",
            gap: 1,
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <AvatarWithStatus online={sender} src={senderInfo.img} />
            <Box sx={{ flex: 1 }}>
              <Typography level="title-sm">{senderInfo.name}</Typography>
              <Typography level="body-sm">{senderInfo.email}</Typography>
            </Box>
            <Box
              sx={{
                lineHeight: 1.5,
                textAlign: "right",
              }}
            >
              {messages[0] && (
                <CircleIcon sx={{ fontSize: 12 }} color="primary" />
              )}
              <Typography
                level="body-xs"
                display={{ xs: "none", md: "block" }}
                noWrap
              >
                5 mins ago
              </Typography>
            </Box>
          </Stack>
          <Typography
            level="body-sm"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {messages[messages.length - 1].content
              ? messages[messages.length - 1].content
              : messages[messages.length - 1].attachment.fileName}
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListDivider sx={{ margin: 0 }} />
    </React.Fragment>
  );
}
