import React from "react";
import { Grid } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import { Box } from "@mui/joy";

function NewsSection({ data }) {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography level="h3">Latest news</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 5 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
        sx={{
          flexGrow: 1,
          pt: 3,
        }}
      >
        {data.map((i, index) => (
          <Grid lg={4} md={6} key={index}>
            <Card variant="plain" sx={{ p: 0 }}>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                  src={i.img}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <CardContent>
                <Typography level="title-lg">Lorem Ipsum</Typography>
                <Typography level="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NewsSection;
