import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CollectionsBookmarkRoundedIcon from "@mui/icons-material/CollectionsBookmarkRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/joy";
import Box from "@mui/joy/Box";

function generateListItemButton(text, icon, path) {
  const isActive = location.pathname === path;
    const navigate = useNavigate()
  return (
    <ListItemButton onClick={()=>{navigate(path);alert(path)}} sx={{ width: "100%" }} selected={isActive}>
      {icon}
      {text}
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
    const location = useLocation()
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
          <ListItemButton>
            <HomeRoundedIcon />
            <ListItemContent>
              <Typography level="title-sm">Home</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <DashboardRoundedIcon />
            <ListItemContent>
              <Typography level="title-sm">Dashboard</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <CollectionsBookmarkRoundedIcon />
            <ListItemContent>
              <Typography level="title-sm">Projects</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem nested>
          <Toggler
            renderToggle={({ open, setOpen }) => (
              <ListItemButton onClick={() => setOpen(!open)}>
                <AssignmentRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Tasks</Typography>
                </ListItemContent>
                <KeyboardArrowDownIcon
                  sx={{ transform: open ? "rotate(180deg)" : "none" }}
                />
              </ListItemButton>
            )}
          >
            <List sx={{ gap: 0.5 }}>
              <ListItem sx={{ mt: 0.5 }}>
                <ListItemButton>All tasks</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Backlog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>In progress</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Done</ListItemButton>
              </ListItem>
            </List>
          </Toggler>
        </ListItem>

        <ListItem>
          <ListItemButton
            role="menuitem"
            component="a"
            href="/joy-ui/getting-started/templates/messages/"
          >
            <QuestionAnswerRoundedIcon />
            <ListItemContent>
              <Typography level="title-sm">Messages</Typography>
            </ListItemContent>
            <Chip size="sm" color="primary" variant="solid">
              4
            </Chip>
          </ListItemButton>
        </ListItem>

        <ListItem nested>
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
            {generateListItemButton(
              "Settings",
              <SettingsRoundedIcon />,
              "/settings"
            )}
        </ListItem>
      </List>
    </>
  );
}

export default SidebarListItem;
