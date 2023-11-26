import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import { listItemButtonClasses } from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

import { closeSidebar } from "../../utils";
import SidebarListItem from "./SidebarListItem";
import UserSectionSideBar from "./UserSectionSideBar";

import { Badge } from "@mui/joy";

import NotificationsIcon from "@mui/icons-material/Notifications";

import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";

import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

export default function Sidebar() {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: {
          xs: "fixed",
          md: "sticky",
        },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 1.5,
        py: 3,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Typography level="title-lg">Menu</Typography>
        <Dropdown>
          <MenuButton variant="plain" sx={{ p: 0 }}>
            <Badge badgeContent={2} badgeInset="4px 4px 0 0" size="sm">
              <IconButton size="sm">
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </MenuButton>
          <Menu sx={{ zIndex: 999999999999, height: "50vh" }}>
            <MenuItem sx={{ zIndex: 9999 }}>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  overflow: { xs: "auto", sm: "initial" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    display: "block",
                    width: "1px",
                    bgcolor: "warning.300",
                    left: "500px",
                    top: "-24px",
                    bottom: "-24px",
                    "&::before": {
                      top: "4px",
                      display: "block",
                      position: "absolute",
                      right: "0.5rem",
                      color: "text.tertiary",
                      fontSize: "sm",
                      fontWeight: "lg",
                    },
                    "&::after": {
                      top: "4px",
                      display: "block",
                      position: "absolute",
                      left: "0.5rem",
                      color: "text.tertiary",
                      fontSize: "sm",
                      fontWeight: "lg",
                    },
                  }}
                />
                <Card
                  orientation="horizontal"
                  sx={{
                    width: "100%",
                    flexWrap: "wrap",
                    [`& > *`]: {
                      "--stack-point": "500px",
                      minWidth:
                        "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                    },
                    // make the card resizable for demo
                    overflow: "auto",
                    resize: "horizontal",
                  }}
                >
                  <AspectRatio
                    flex
                    ratio="1"
                    maxHeight={182}
                    sx={{ minWidth: 182 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1551706872-893907c44a3e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                  <CardContent>
                    <Typography fontSize="xl" fontWeight="lg">
                      Name Surname
                    </Typography>
                    <Typography
                      level="body-sm"
                      fontWeight="lg"
                      textColor="text.tertiary"
                    >
                      Wants to take the rande vous 28 Nov 2023
                    </Typography>
                    <Sheet
                      sx={{
                        bgcolor: "background.level1",
                        borderRadius: "sm",
                        p: 1.5,
                        my: 1.5,
                        display: "flex",
                        gap: 2,
                        "& > div": { flex: 1 },
                      }}
                    >
                      <div>
                        <Typography level="body-xs" fontWeight="lg">
                          Penalties
                        </Typography>
                        <Typography fontWeight="lg">34</Typography>
                      </div>
                      <div>
                        <Typography level="body-xs" fontWeight="lg">
                          Points
                        </Typography>
                        <Typography fontWeight="lg">980</Typography>
                      </div>
                      <div>
                        <Typography level="body-xs" fontWeight="lg">
                          Rating
                        </Typography>
                        <Typography fontWeight="lg">8.9</Typography>
                      </div>
                    </Sheet>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        "& > button": { flex: 1 },
                      }}
                    >
                      <Button variant="outlined" color="neutral">
                        Reject
                      </Button>
                      <Button variant="solid" color="primary">
                        Accept
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </MenuItem>
            <MenuItem sx={{ zIndex: 9999 }}>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  overflow: { xs: "auto", sm: "initial" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    display: "block",
                    width: "1px",
                    bgcolor: "warning.300",
                    left: "500px",
                    top: "-24px",
                    bottom: "-24px",
                    "&::before": {
                      top: "4px",
                      display: "block",
                      position: "absolute",
                      right: "0.5rem",
                      color: "text.tertiary",
                      fontSize: "sm",
                      fontWeight: "lg",
                    },
                    "&::after": {
                      top: "4px",
                      display: "block",
                      position: "absolute",
                      left: "0.5rem",
                      color: "text.tertiary",
                      fontSize: "sm",
                      fontWeight: "lg",
                    },
                  }}
                />
                <Card
                  orientation="horizontal"
                  sx={{
                    width: "100%",
                    flexWrap: "wrap",
                    [`& > *`]: {
                      "--stack-point": "500px",
                      minWidth:
                        "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                    },
                    // make the card resizable for demo
                    overflow: "auto",
                    resize: "horizontal",
                  }}
                >
                  <AspectRatio
                    flex
                    ratio="1"
                    maxHeight={182}
                    sx={{ minWidth: 182 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1544179559-032b931c661e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                  <CardContent>
                    <Typography fontSize="xl" fontWeight="lg">
                      Name Surname
                    </Typography>
                    <Typography
                      level="body-sm"
                      fontWeight="lg"
                      textColor="text.tertiary"
                    >
                      Wants to take the rande vous 28 Nov 2023
                    </Typography>
                    <Sheet
                      sx={{
                        bgcolor: "background.level1",
                        borderRadius: "sm",
                        p: 1.5,
                        my: 1.5,
                        display: "flex",
                        gap: 2,
                        "& > div": { flex: 1 },
                      }}
                    >
                      <div>
                        <Typography level="body-xs" fontWeight="lg">
                          Penalties
                        </Typography>
                        <Typography fontWeight="lg">34</Typography>
                      </div>
                      <div>
                        <Typography level="body-xs" fontWeight="lg">
                          Points
                        </Typography>
                        <Typography fontWeight="lg">980</Typography>
                      </div>
                      <div>
                        <Typography level="body-xs" fontWeight="lg">
                          Rating
                        </Typography>
                        <Typography fontWeight="lg">8.9</Typography>
                      </div>
                    </Sheet>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        "& > button": { flex: 1 },
                      }}
                    >
                      <Button variant="outlined" color="neutral">
                        Reject
                      </Button>
                      <Button variant="solid" color="primary">
                        Accept
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <SidebarListItem />
      </Box>
      <UserSectionSideBar />
    </Sheet>
  );
}

