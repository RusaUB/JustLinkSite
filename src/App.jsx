import { Routes,Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { CssVarsProvider } from "@mui/joy";
import AuthProvider from "./contexts/AuthContext";
import DashBoard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <CssVarsProvider defaultMode="light">
        <Routes>
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
          <Route path="/" element={<DashBoard/>}></Route>
        </Routes>
      </CssVarsProvider>
    </AuthProvider>
  );
}

export default App;