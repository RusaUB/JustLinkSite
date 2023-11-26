import React from "react";
import { Box } from "@mui/joy";
import SliderComponent from "./SliderComponent";
import { slideItems, newsData } from "../../data";
import NewsSection from "./NewsSection"; 
import FAQSection from "./FAQSection";

function HomeScreen() {
  return (
    <>
      <Box
        component="main"
        className="MainContent"
        sx={{
          pt: {
            xs: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: {
            xs: 2,
            sm: 2,
            md: 3,
          },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "100%",
            pt: 3,
            px: { xs: 3, lg: 5, xl: 10 },
          }}
        >
          <SliderComponent data={slideItems} />
          <NewsSection data = {newsData}/>
          <FAQSection />
        </Box>
      </Box>
    </>
  );
}

export default HomeScreen;
