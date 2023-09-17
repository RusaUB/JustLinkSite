import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    // Если процесс аутентификации еще не завершен, можно показать индикатор загрузки или другой контент
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;