import CourseCard from "../../components/courses/CourseCard";
import { Divider, Grid, Stack, Typography } from "@mui/joy";
import Box from "@mui/joy/Box";
import LinkTabList from "../../components/settings/LinkTabList";
import LinkHeader from "../../components/settings/LinkHeader";
import { useDataBase } from "../../contexts/DataBaseContext";

const TabListItems = [
  {
    displayName: "My Events",
    path: "",
  },
  {
    displayName: "Active",
    path: "",
  },
  {
    displayName: "Finished",
    path: "",
  },
];

function EventPage() {
  const { eventsData, dbLoding } = useDataBase();
  console.log(eventsData)
  if (dbLoding){
    <></>
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
          {/* Increase the padding and adjust the grid settings */}
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
            {eventsData?.map((item, index) => (
              <Grid xs={2} sm={4} md={4} key={index}>
                <CourseCard title={item.displayName}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default EventPage;
