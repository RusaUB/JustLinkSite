import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Box, Stack } from "@mui/joy";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

export default function CourseCardInfo({ item }) {
  return (
    <Card variant="outlined">
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={item.img} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-sm">California</Typography>
        <Typography level="title-md">{item.title}</Typography>
      </CardContent>
      <CardContent orientation="vertical">
        <Stack direction={"column"} spacing={1}>
          <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
            <AccessTimeIcon fontSize="15px" />
            <Typography level="body-sm">10 hour of course</Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
            <DataObjectIcon fontSize="15px" />
            <Typography level="body-sm">23 exercices of grammar</Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
            <CardMembershipIcon fontSize="15px" />
            <Typography level="body-sm">Сertificate of completion</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
