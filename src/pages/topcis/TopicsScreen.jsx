import React from "react";
import { Box, Stack } from "@mui/joy";

import ForumCards from "./ForumCards";
import TopicInput from "./TopicInput";
import { useDataBase } from "../../contexts/DataBaseContext";

function TopicsScreen() {
  const {currentUserData} = useDataBase()
  return (
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
        {currentUserData && (
          <>
            <Box sx={{ flex: 1, mb: 2 }}>
              <TopicInput data={currentUserData} />
            </Box>
            <Stack spacing={2}> 

            {Array.from({length:5},(_,index)=>(
              <ForumCards data={currentUserData} />
            ))}
            </Stack>
          </>
        )}
      </Box>
    </Box>
  );
}

export default TopicsScreen;
