import Box from "@mui/joy/Box";
import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';
import { Outlet } from "react-router-dom";
import LinkHeader from "../../components/dashboard/LinkHeader";
import { Stack } from "@mui/joy";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Sidebar />
      <Header />
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
          }}
        >
          <LinkHeader />
          <Stack
            spacing={4}
            sx={{
              display: "flex",
              maxWidth: "800px",
              mx: "auto",
              px: {
                xs: 2,
                md: 6,
              },
              py: {
                xs: 2,
                md: 3,
              },
            }}
          >
            <Outlet  />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}