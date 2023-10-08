import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { IconButton } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";
import { useAuth } from "../../contexts/AuthContext";
import { database as db } from "../../firebase";
import { ref, set,get, push} from "firebase/database";

// Custom CSS
const twoLineText = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2, // Number of lines to display
  WebkitBoxOrient: "vertical",
};


export default function OverflowCard({ item, itemId }) {
  const { currentUser } = useAuth();
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
  return (
    <div className="overflow-card-container">
      <Card variant="outlined">
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={item.img} srcSet={item.img} loading="lazy" alt="" />
          </AspectRatio>
          <IconButton
            color="primary"
            size="md"
            variant="soft"
            sx={{
              position: "absolute",
              zIndex: 2,
              borderRadius: "50%",
              right: "1rem",
              bottom: 0,
              transform: "translateY(50%)",
            }}
            onClick={() => {
              addParticipant(itemId, currentUser.uid);
            }}
          >
            <AddIcon />
          </IconButton>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md" sx={twoLineText}>
            {item.title}
          </Typography>
          <Typography level="body-sm" sx={twoLineText}>
            {item.description}
          </Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              Quartier du Faubourg-du-Roule, Paris
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              {item.startDate} {item.startTime}-{item.endTime}
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </div>
  );
}
