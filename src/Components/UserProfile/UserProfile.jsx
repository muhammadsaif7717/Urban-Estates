import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";


const UserProfile = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>User Profile</h1>
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
        </div>
    );
};

export default UserProfile;