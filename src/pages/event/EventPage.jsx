import CourseCard from "../../components/courses/CourseCard";
import { Divider, Grid, Stack, Typography } from "@mui/joy";
import Box from "@mui/joy/Box";
import LinkTabList from "../../components/settings/LinkTabList";
import LinkHeader from "../../components/settings/LinkHeader";
import { useDataBase } from "../../contexts/DataBaseContext";
import { Outlet, useLocation } from "react-router-dom";

const TabListItems = [
  {
    displayName: "Active",
    path: "",
  },
  {
    displayName: "My Events",
    path: "my_events",
  },
  {
    displayName: "Finished",
    path: "completed",
  },
];

function EventPage() {
  const { eventsData, dbLoding } = useDataBase();
  const location = useLocation();
  if (dbLoding) {
    <></>;
  } else {
    return (
      <Box
        component="main"
        className="MainContent"
        sx={{
          pt: {
            xs: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: {
            xs: 2,
            sm: 2,
            md: 3,
          },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "100%",
          }}
        >
          <LinkHeader title={"Events"} tabs={TabListItems} />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              flexGrow: 1,
              pt: {
                md: 3,
                xs: 2,
              },
              px: {
                md: 5,
                xs: 2,
              },
            }}
          >
            <Outlet />
            {location.pathname == "/event" &&
              eventsData.map((item, index) => (
                <Grid xs={4} sm={4} md={4} key={index}>
                  <CourseCard item={item} itemId = {index} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default EventPage;
