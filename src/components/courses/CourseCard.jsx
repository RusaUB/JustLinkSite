import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

// Custom CSS
const twoLineText = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2, // Number of lines to display
  WebkitBoxOrient: "vertical",
};

export default function OverflowCard({ item }) {

  return (
    <div className="overflow-card-container">
      <Card variant="outlined" className="overflow-card">
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={item.img} srcSet={item.img} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md" sx={twoLineText}>
            {item.title}
          </Typography>
          <Typography level="body-sm" sx={twoLineText}>
            {item.description}
          </Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              Quartier du Faubourg-du-Roule, Paris
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              {item.startDate} {item.startTime}-{item.endTime}
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </div>
  );
}
