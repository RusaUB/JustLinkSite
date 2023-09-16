import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser]); // Add currentUser to the dependency array

  return (
    <div>
      {currentUser ? (
        <p>Welcome, {currentUser.displayName}!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DashBoard;
