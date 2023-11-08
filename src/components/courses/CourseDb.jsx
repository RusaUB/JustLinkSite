import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { LinearProgress } from "@mui/joy";
import {Stack} from "@mui/joy";
import {Box} from "@mui/joy";

export default function CourseDb({item}) {
    console.log(item)
  return (
    <Card>
      <div>
        <Box sx={{ display: "flex", width:'100%', justifyContent: "space-between" }}>
          <Box>
            <Typography
              level="title-lg"
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 1, // Number of lines to display for non-mobile
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.title}
            </Typography>
            <Typography level="body-sm">April 24 to May 02, 2021</Typography>
          </Box>
          <Box>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
            >
              <BookmarkAdd />
            </IconButton>
          </Box>
        </Box>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={item.img} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <LinearProgress determinate />
      </CardContent>
    </Card>
  );
}
