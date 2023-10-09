import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import { useDataBase } from "../../contexts/DataBaseContext";
import { useAuth } from "../../contexts/AuthContext";
import { AspectRatio } from "@mui/joy";

export default function ModalConfirmation({item, itemId,open, setOpen}) {
    const {addParticipant} = useDataBase()
    const {currentUser} = useAuth();
  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)} sx={{zIndex:99999}}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only("xs")]: {
              top: "unset",
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: "none",
              maxWidth: "unset",
            },
          })}
        >   
          <Typography id="nested-modal-title" level="h2">
            Are you absolutely sure?
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
                Are you sure you want to take part in the <strong>{item.title}</strong>? By confirming this action, you will add a new event to your agenda for {item.title}.
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              gap: 1,
              flexDirection: { xs: "column", sm: "row-reverse" },
            }}
          >
            <Button
              variant="solid"
              color="primary"
              onClick={() => {
                addParticipant(itemId, currentUser.uid);
                setOpen(false)
              }}
            >
              Confirm
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
