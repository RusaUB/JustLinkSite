import Avatar from "@mui/joy/Avatar";
import Divider from "@mui/joy/Divider";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/joy";
import { IconButton } from "@mui/joy";
import { useDataBase } from "../../contexts/DataBaseContext";
import { useAuth } from "../../contexts/AuthContext";

function UserSectionSideBar() {
  const { currentUserData, dbLoding } = useDataBase();
  const { currentUser } = useAuth();
  if (dbLoding) {
    return <></>;
  } else {
    return (
      <>
        <Divider />
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Avatar
            variant="outlined"
            size="sm"
            src={currentUserData.img}
          />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-sm">{currentUserData.name} {currentUserData.surname}</Typography>
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
}

export default UserSectionSideBar;
