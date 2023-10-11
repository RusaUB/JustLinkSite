import Box from "@mui/joy/Box";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import { Outlet, useLocation } from "react-router-dom";
import { AspectRatio, Typography } from "@mui/joy";
import HomeScreen from "../home/HomeScreen";


export default function Dashboard() {
  const location = useLocation();
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Sidebar />
      <Header />
      <Outlet />
      {location.pathname === "/" && <HomeScreen/>} 
    </Box>
  );
}