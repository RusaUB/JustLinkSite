import { Button } from "@mui/joy";
import { useAuth } from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function DashBoard() {
  return (
    <div>
      <Button onClick={()=>{signOut(auth)}}>LogOut</Button>
    </div>
  );
}

export default DashBoard;
