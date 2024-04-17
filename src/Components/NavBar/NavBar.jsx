import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const NavBar = () => {
    const { user, logOutUser, setRelaod } = useContext(AuthContext)

    useEffect(() => {
        setRelaod(true);
    }, [setRelaod]); 

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
            <div className="animate__animated animate__fadeInDown flex flex-col md:flex-row items-center justify-between bg-base-100 p-0 space-y-2">
                <div className="flex justify-between w-full md:w-auto">
                    <div>

                        <Link to="/" className="btn btn-ghost text-2xl font-bold p-0">Urban Estates</Link>
                    </div>
                    <div className="flex md:hidden gap-1 md:gap-2  lg:gap-5 items-center">
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



                <div className="flex md:hidden ">
                        <nav className=" text-[14px] md:text-[14px]  lg:text-lg w-ful">
                            <NavLink className="px-1 lg:px-4" to="/">Home</NavLink>
                            <NavLink className="px-1 lg:px-4" to="/about">About</NavLink>
                            <NavLink className="px-1 lg:px-4" to="/update-profile">Update Profile</NavLink>
                            <NavLink className="px-1 lg:px-4" to="/user-profile">User Profile</NavLink>

                        </nav>
                    </div>



                <div className="flex justify-between items-center">
                    <div className="hidden md:flex">
                        <nav className=" text-[14px] md:text-[14px]  lg:text-lg w-ful">
                            <NavLink className="px-1 md:px-2 lg:px-4" to="/">Home</NavLink>
                            <NavLink className="px-1 md:px-2 lg:px-4" to="/about">About</NavLink>
                            <NavLink className="px-1 md:px-2 lg:px-4" to="/update-profile">Update Profile</NavLink>
                            <NavLink className="px-1 md:px-2 lg:px-4" to="/user-profile">User Profile</NavLink>

                        </nav>
                    </div>
                    <div className="hidden md:flex gap-1 md:gap-2  lg:gap-4 items-center">
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

            </div>
        </>
    );
};

export default NavBar;