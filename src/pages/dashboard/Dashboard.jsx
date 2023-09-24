import Box from "@mui/joy/Box";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/joy";
import { Calendar } from "react-big-calendar";
export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Sidebar />
      <Header />
      <Outlet />
    </Box>
  );
}