import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const handleLogoutButton = () => {
        logOutUser()
            .then(() => {
                console.log("Use Log out Successfull")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <>
            <div className="navbar bg-base-100 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <nav tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2  bg-base-100 rounded-box w-52 text-lg z-30 shadow-2xl border-2">
                            <NavLink className="px-5" to="/">Home</NavLink>
                            <NavLink className="px-5" to="/about">About</NavLink>
                            <NavLink className="px-5" to="/update-profile">Update Profile</NavLink>
                            <NavLink className="px-5" to="/user-profile">User Profile</NavLink>
                        </nav>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl font-bold p-0">Urban Estates</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav className="menu menu-horizontal px-1 text-lg">
                        <NavLink className="px-5" to="/">Home</NavLink>
                        <NavLink className="px-5" to="/about">About</NavLink>

                        <NavLink className="px-5" to="/update-profile">Update Profile</NavLink>
                        <NavLink className="px-5" to="/user-profile">User Profile</NavLink>

                    </nav>
                </div>
                <div className="navbar-end flex gap-5 items-center">
                    <div>
                        {
                            user ?
                                <div role="button" className="btn btn-ghost btn-circle avatar" title={user.displayName}>
                                    <div className="w-10 rounded-full">
                                        <img alt="Profile Picture" src={user.photoURL
                                        } />
                                    </div>
                                </div>
                                :
                                ''
                            // <div role="button" className="btn btn-ghost btn-circle avatar">
                            //     <div className="w-10 rounded-full">
                            //         <img alt="Profile Picture" src="https://i.postimg.cc/wjnRRSJh/user.png" />
                            //     </div>
                            // </div>
                        }
                    </div>

                    <div>
                        {
                            user ?
                                <button onClick={handleLogoutButton} className="btn btn-primary border-none bg-orange-500 text-white">Logout</button>
                                :
                                <Link to='/sign-in' className="btn btn-primary border-none bg-orange-500 text-white">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;