import Box from "@mui/joy/Box";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import { Outlet } from "react-router-dom";
import LinkHeader from "../../components/dashboard/LinkHeader";
import { Stack } from "@mui/joy";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Sidebar />
      <Header />
      <Outlet />
    </Box>
  );
}