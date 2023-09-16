import { useAuth } from "../../contexts/AuthContext";

function DashBoard() {
    const {currentUser} = useAuth();
    return (
        <div>
            {JSON.stringify(currentUser).uid}
        </div>
    );
}

export default DashBoard;