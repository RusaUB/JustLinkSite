import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { Avatar, Button, Stack } from "@mui/joy";

import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Box } from "@mui/joy";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ForumCard({ data }) {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const orientation = isSmallScreen ? "vertical" : "horizontal";
  return (
    <Card variant="outlined" orientation={orientation}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>

          <Box sx={{width:'70%'}}>
            <Typography level="title-lg" id="card-description">
              What is Lorem Ipsum?
            </Typography>
            <Typography level="body-sm" sx={{ my: 1 }} id="card-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <Stack direction={"row"} spacing={1} sx={{ my: 1 }}>
              <Chip
                variant="outlined"
                color="primary"
                size="sm"
                sx={{ pointerEvents: "none" }}
              >
                Lorem Ipsum
              </Chip>
              <Chip
                variant="outlined"
                color="primary"
                size="sm"
                sx={{ pointerEvents: "none" }}
              >
                Lorem Ipsum
              </Chip>
              <Chip
                variant="outlined"
                color="primary"
                size="sm"
                sx={{ pointerEvents: "none" }}
              >
                Lorem Ipsum
              </Chip>
            </Stack>
          </Box>

          <Stack spacing={0.5} direction={"row"} sx={{ alignItems: "center" }}>
            <Button variant="outlined" sx={{p:0.5}}>
              <ExpandLessIcon />
            </Button>
            <Typography level="body-sm">+10</Typography>
            <Button variant="outlined" sx={{p:0.5}}>
              <ExpandMoreIcon />
            </Button>
          </Stack>

        </Box>

        <Box sx={{ mt: "auto" }}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ my: 1, justifyContent: "space-between" }}
          >
            <Stack direction={"row"}>
              <Avatar src={data.img} />
              <Stack sx={{ mx: 1, justifyContent: "center" }}>
                <Typography level="body-sm">{data.name}</Typography>
                <Typography level="body-xs">3 weeks ago</Typography>
              </Stack>
            </Stack>

            <Stack direction={"row"}>
              <Stack sx={{ mx: 1, justifyContent: "center" }}>
                <Stack
                  direction={"row"}
                  sx={{ alignItems: "center" }}
                  spacing={0.5}
                >
                  <VisibilityIcon fontSize="2" />
                  <Typography level="body-sm">32</Typography>
                </Stack>
              </Stack>
              <Stack sx={{ mx: 1, justifyContent: "center" }}>
                <Stack
                  direction={"row"}
                  sx={{ alignItems: "center" }}
                  spacing={0.5}
                >
                  <CommentIcon fontSize="2" />
                  <Typography level="body-sm">32</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
