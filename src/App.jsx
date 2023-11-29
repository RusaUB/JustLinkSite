import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { CssVarsProvider } from "@mui/joy";
import AuthProvider from "./contexts/AuthContext";
import DashBoard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import SettingsPage from "./pages/settings/SettingsPage";
import Agenda from "./pages/agenda/Agenda";
import DocumentsPage from "./pages/documents/DocumentsPage";
import EventPage from "./pages/event/EventPage";
import MessageApp from "./pages/message/MessagePage";
import DataBaseProvider from './contexts/DataBaseContext';
import CompltedEvents from "./pages/event/CompletedEvents";
import UserEvents from "./pages/event/UserEvents";
import TopicsScreen from "./pages/topcis/TopicsScreen";

function App() {
  return (
    <AuthProvider>
      <DataBaseProvider>
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
              <Route path="/agenda" element={<Agenda />}></Route>
              <Route path="/documents" element={<DocumentsPage />}></Route>
              <Route path="/topics" element={<TopicsScreen/>}></Route>
              {/* <Route path="/courses" element={<CourseMainScreen />}></Route>
              <Route path="/courses/:route" element={<CourseInfo />}></Route> */}
              <Route path="/event" element={<EventPage />}>
                <Route path="completed" element={<CompltedEvents />}></Route>
                <Route path="my_events" element={<UserEvents />}></Route>
              </Route>
              <Route path="/message" element={<MessageApp />}></Route>
            </Route>
          </Routes>
        </CssVarsProvider>
      </DataBaseProvider>
    </AuthProvider>
  );
}

export default App;