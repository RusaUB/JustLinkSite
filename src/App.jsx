import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { CssVarsProvider } from "@mui/joy";
import AuthProvider from "./contexts/AuthContext";
import DashBoard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import SettingsPage from "./pages/settings/SettingsPage";
import MyProfile from "./pages/profile/MyProfile";

function App() {
  return (
    <AuthProvider>
      <CssVarsProvider defaultMode="light">
        <Routes>
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          >
            <Route path="/settings" element={<SettingsPage />}></Route>
            <Route path="/profile" element={<MyProfile/> }></Route>
          </Route>
        </Routes>
      </CssVarsProvider>
    </AuthProvider>
  );
}

export default App;