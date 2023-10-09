import { useDataBase } from "../../contexts/DataBaseContext";
import OverflowCard from "../../components/courses/CourseCard";
import { Grid } from "@mui/joy";

function UserEvents() {
  const { currentUserEvents } = useDataBase();
  return (
    <>
      {currentUserEvents.map((event,index) => (
        <Grid xs={4} sm={4} md={4} key={index}>
          <OverflowCard item={event} itemId={index} />
        </Grid>
      ))}
    </>
  );
}

export default UserEvents;
