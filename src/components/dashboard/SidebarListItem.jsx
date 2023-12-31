import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CollectionsBookmarkRoundedIcon from "@mui/icons-material/CollectionsBookmarkRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Chip from "@mui/joy/Chip";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/joy";
import Box from "@mui/joy/Box";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import SchoolIcon from "@mui/icons-material/School";
import FolderIcon from "@mui/icons-material/Folder";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import TopicIcon from "@mui/icons-material/Topic";

import GroupIcon from "@mui/icons-material/Group";

function generateListItemButton(text, icon, path,children) {
  const isActive = location.pathname === path;
    const navigate = useNavigate()
  return (
    <ListItemButton
      onClick={() => {
        navigate(path);
      }}
      sx={{ width: "100%" }}
      selected={isActive}
    >
      {icon}
      <ListItemContent>
        <Typography level="title-sm">{text}</Typography>
      </ListItemContent>
      {children}
    </ListItemButton>
  );
}

function Toggler({ defaultExpanded = false, renderToggle, children }) {
  const [open, setOpen] = React.useState(defaultExpanded);

  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

function SidebarListItem() {

  return (
    <>
      <List
        size="sm"
        sx={{
          gap: 1,
          "--List-nestedInsetStart": "30px",
          "--ListItem-radius": (theme) => theme.vars.radius.sm,
        }}
      >
        <ListItem>
          {generateListItemButton("Home", <HomeRoundedIcon />, "/")}
        </ListItem>

        {/* <ListItem>
          {generateListItemButton("Courses", <SchoolIcon />, "/courses")}
        </ListItem> */}

        <ListItem>
          {generateListItemButton("Agenda", <ViewAgendaIcon />, "/agenda")}
        </ListItem>

        <ListItem>
          {generateListItemButton(
            "Events",
            <HomeRepairServiceIcon />,
            "/event"
          )}
        </ListItem>

        <ListItem>
          {generateListItemButton("Topics", <TopicIcon />, "/topics")}
        </ListItem>

        <ListItem>
          {generateListItemButton(
            "Messages",
            <QuestionAnswerRoundedIcon />,
            "/message",
            <Chip size="sm" color="primary" variant="solid">
              4
            </Chip>
          )}
        </ListItem>

        {/* <ListItem>
          {generateListItemButton(
            "Meetings",
            <PermContactCalendarIcon />,
            "/meetings"
          )}
        </ListItem> */}

        <ListItem>
          {generateListItemButton("Users", <GroupIcon />, "/users")}
        </ListItem>

        <ListItem>
          {generateListItemButton("Documents", <FolderIcon />, "/documents")}
        </ListItem>

        {/* <ListItem nested>
          <Toggler
            defaultExpanded
            renderToggle={({ open, setOpen }) => (
              <ListItemButton onClick={() => setOpen(!open)}>
                <GroupRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Users</Typography>
                </ListItemContent>
                <KeyboardArrowDownIcon
                  sx={{ transform: open ? "rotate(180deg)" : "none" }}
                />
              </ListItemButton>
            )}
          >
            <List sx={{ gap: 0.5 }}>
              <ListItem sx={{ mt: 0.5 }}>
                <Link style={{ width: "100%" }} to={"/profile"}>
                  <ListItemButton selected>My profile</ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <ListItemButton>Create a new user</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Roles & permission</ListItemButton>
              </ListItem>
            </List>
          </Toggler>
        </ListItem>
        <ListItem>

        
        </ListItem> */}
        {generateListItemButton(
          "Settings",
          <SettingsRoundedIcon />,
          "/settings"
        )}
      </List>
    </>
  );
}

export default SidebarListItem;
