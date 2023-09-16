import { Routes,Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { CssVarsProvider } from "@mui/joy";

function App() {
  return (
    <CssVarsProvider defaultMode="light">
      <Routes>
        <Route path="/login">
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </CssVarsProvider>
  );
}

export default App;