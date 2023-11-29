import { Avatar, Box, Button, Card, Input, Stack } from "@mui/joy";
import { useDataBase } from "../../contexts/DataBaseContext";

function TopicInput({data}) {
  return (
    <Card>

    <Stack direction={"row"} sx={{ width: "100%", }} spacing={2}>
      <Avatar alt="Remy Sharp" src={data.img} />
      <Input sx={{ width: "100%" }} placeholder="Type in here…" />
      <Button sx={{ width: "15%" }}>Create Topic</Button>
    </Stack>
    </Card>
  );
}

export default TopicInput;
