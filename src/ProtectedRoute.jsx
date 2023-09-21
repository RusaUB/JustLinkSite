import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { CircularProgress } from "@mui/joy";

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    // Если процесс аутентификации еще не завершен, можно показать индикатор загрузки или другой контент
    return <div><CircularProgress /></div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;