import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import MuseumIcon from '@mui/icons-material/Museum';

export default function DashboardCard({item}) {
  return (
    <Card
      size="lg"
      variant="solid"
      color="primary"
      orientation="horizontal"
      sx={{
        textAlign: "center",
        // to make the demo resizable
        resize: "horizontal",
        height: 120,
      }}
    >
      <CardContent
        variant="solid"
        color="primary"
        sx={{
          display: "flex",
          flexDirection:'row',
          alignItems:'center',
          justifyContent: "center",
          px: 1,
        }}
      >
        <div className="w-full">
          <Typography fontSize="xl3" fontWeight="xl" textColor="#fff">
            20
          </Typography>
          <Typography level="body-xs" textColor="primary.200">
            Available Events to Join
          </Typography>
        </div>
        <div className="w-[60%]">
          <MuseumIcon sx={{width:'100%', height:"100%"}} />
        </div>
      </CardContent>
    </Card>
  );
}