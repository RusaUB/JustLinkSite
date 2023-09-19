import Avatar from "@mui/joy/Avatar";
import Divider from "@mui/joy/Divider";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/joy";
import {IconButton} from "@mui/joy";
import { useAuth } from "../../contexts/AuthContext";

function UserSectionSideBar() {
    const {currentUser}= useAuth()
    console.log(currentUser)
  return (
    <>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">{currentUser.uid.slice(0,10)}...</Typography>
          <Typography level="body-xs">{currentUser.email}</Typography>
        </Box>
        <IconButton
          size="sm"
          variant="plain"
          color="neutral"
          onClick={() => {
            signOut(auth);
          }}
        >
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default UserSectionSideBar;
