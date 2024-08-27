import { useContext } from "react";
import userDefaultPic from "../../assets/user.png"
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { dark, setDark } = useContext(AuthContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#444444',
    };
    return (
        <div style={containerStyle} className="border p-5">
            <div>
            <div style={containerStyle} className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={user?.photoURL ? user.photoURL : userDefaultPic} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{user?.displayName ? user.displayName : "No name"}</h2>
                    <p>Email: {user?.email ? user.email : "No email"}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;