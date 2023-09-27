import CourseCard from "../../components/courses/CourseCard";
import { Divider, Grid, Stack, Typography } from "@mui/joy";
import Box from "@mui/joy/Box";

function Courses() {
  return (
    <Box sx={{ m: 3, flex:1, top:40, position:{xs:'absolute', md:'sticky'} }}>
      {/* Increase the padding and adjust the grid settings */}
      <Stack direction={'column'} spacing={2} sx={{my:2}}>
        <Typography level="h4">My Courses</Typography>
        <Divider />
      </Stack>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        {Array.from(Array(7)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <CourseCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );

}

export default Courses;
