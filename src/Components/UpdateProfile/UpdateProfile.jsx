import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const UpdateProfile = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>Update Profile</h1>
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
        </div>
    );
};

export default UpdateProfile;