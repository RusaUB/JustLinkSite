import { useAuth } from "../../contexts/AuthContext";

function DashBoard() {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        <p>Welcome, {JSON.stringify(currentUser)}!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DashBoard;
