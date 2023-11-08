import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { LinearProgress, Tooltip } from "@mui/joy";
import { Stack } from "@mui/joy";
import { Box } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function CourseDb({ item }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate()
  const titleStyle = {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    color: isHovered && "#2196F3",
    transition: "color 0.1s",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
    
  return (
    <Card
      sx={{ cursor: "pointer" }}
      onClick = {()=>{navigate(`${item.route}`);}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography level="title-lg" sx={titleStyle}>
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
      <Tooltip placement="right" title={"20%"} variant="solid">
        <CardContent>
          <LinearProgress determinate />
        </CardContent>
      </Tooltip>
    </Card>
  );
}
