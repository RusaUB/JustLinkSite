import React, { useEffect, useState } from "react";
import { database as db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Box, Grid } from "@mui/joy";
import CourseCardInfo from "./CourseCardInfo";
import AccordionCoursePanel from "./AccordionCoursePanel";

function CourseInfo() {
  const params = useParams();
  const currentUser = useAuth();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const courseTitle = params.route; // Assuming your route parameter is named "slugifiedTitle"
      const eventRef = ref(db, "courses"); // Reference to the "courses" node

      // Fetch the course data that matches the slugified title
      const unsubscribeEvents = onValue(eventRef, (snapshot) => {
        const courses = snapshot.val();
        const matchingCourse = Object.values(courses).find(
          (course) => course.route === courseTitle
        );
        setCourseData(matchingCourse);
      });

      return () => {
        unsubscribeEvents();
      };
    }
  }, [currentUser, params]);

  return (
    <>
      {courseData ? (
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
              pt: 3,
              px: { xs: 3, xl: 10 },
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3, lg: 5 }}
              columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
              sx={{
                flexGrow: 1,
                pt: {
                  md: 3,
                  xs: 2,
                },
              }}
            >
              <Grid md={9}>
                <Box variant='outlined'>
                  <AccordionCoursePanel/>
                </Box>
              </Grid>
              <Grid md={3}>
                <CourseCardInfo item={courseData} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <p>Loading course data...</p>
      )}
    </>
  );
}

export default CourseInfo;
