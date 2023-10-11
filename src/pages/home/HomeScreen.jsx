import CourseCard from "../../components/courses/CourseCard";
import { Divider, Grid, Stack, Typography } from "@mui/joy";
import Box from "@mui/joy/Box";
import LinkTabList from "../../components/settings/LinkTabList";
import LinkHeader from "../../components/settings/LinkHeader";
import { useDataBase } from "../../contexts/DataBaseContext";
import { Outlet, useLocation } from "react-router-dom";
import DashboardCard from "../../components/home/DashboardCard";
import { homeCards } from "../../data";
import { Card, CardContent } from "@mui/joy";
import { LineChart } from "../../components/home/LineChart";
import PlanningCards from "../../components/home/PlanningCards";
import {IconButton} from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";

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

function HomeScreen() {
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
            <Grid
              container
              spacing={1}
              md={9}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {homeCards.map((item, index) => (
                <Grid md={3} key={index}>
                  <Card
                    variant="plain"
                    sx={{ height: 80, bgcolor: item.bgColor }}
                  >
                    <CardContent>
                      <Typography level="title-md">Events</Typography>
                      <Typography>20</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              <Box sx={{width:'100%', mt:3}}>
              <LineChart />
              </Box>
              <Stack spacing={2} sx={{ flex: 1 }}>
                <Typography level="h4">Planning for this week</Typography>
                <Grid container gap={2} columns={{ md: 12 }} md={12}>
                  <Grid md={5.5}>
                    <PlanningCards />
                  </Grid>
                  <Grid md={5.5}>
                    <PlanningCards />
                  </Grid>
                  <Grid md={5.5}>
                    <PlanningCards />
                  </Grid>
                  <Grid md={5.5}>
                    <PlanningCards />
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Divider orientation="vertical" sx={{ mx: 2 }} />
            <Grid>
              <Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default HomeScreen;