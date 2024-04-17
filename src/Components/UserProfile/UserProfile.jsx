import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";



const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="mb-10">
            <Helmet>
                <title>Urban Estates | User Profile</title>
            </Helmet>
            <div className="block md:hidden animate__animated animate__zoomIn">
                <div className=" bg-[url('https://i.postimg.cc/6qXDtgD0/lotus-design-n-print-Alp8v3dp-Gh0-unsplash.jpg')] bg-center bg-no-repeat bg-cover brightness-90  flex justify-center items-center rounded-xl">
                    <div className="bg-white  w-full p-10 bg-opacity-70 rounded-xl">
                        <h1 className="text-center text-3xl font-bold mb-8">User Profile</h1>
                        < hr className="border-dashed border-gray-400 my-5" />
                        <form className="space-y-4">
                            <div className="flex justify-center mb-5">
                                <img src={user.photoURL} className="w-1/4 rounded-full" />
                            </div>

                            <div className="block md:hidden space-y-2">
                                <div className="flex flex-col">
                                    <label><strong>Name:</strong></label>
                                    <h1>{user.displayName}</h1>
                                </div>
                                <div className="flex flex-col">
                                    <label><strong>Email:</strong></label>
                                    <h1>{user.email}</h1>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




            <div className="hidden md:block animate__animated animate__zoomIn">
                <div
                    style={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className=" relative flex justify-center items-center rounded-xl bg-[url('https://i.postimg.cc/6qXDtgD0/lotus-design-n-print-Alp8v3dp-Gh0-unsplash.jpg')]">
                    <div className="w-full h-[80vh] rounded-xl mb-10 ">

                    </div>

                    <div className="bg-white  w-3/4 lg:w-2/4 p-10 bg-opacity-90 rounded-xl absolute shadow-xl">
                        <h1 className="text-center text-3xl font-bold mb-8">Your Profile</h1>
                        < hr className="border-dashed border-gray-400 my-5" />
                        <div className="space-y-4">
                            <div className="flex justify-center mb-5">
                                <img src={user.photoURL} className="w-1/4 rounded-full" />
                            </div>

                            <div className="hidden md:block">
                                <div className="flex  items-center">
                                    <div><h1 className="text-lg"><strong>Name:</strong> &nbsp;</h1> </div>
                                    <div>{user.displayName}</div>
                                </div>
                                <div className="flex  items-center">
                                    <div><h1 className="text-lg"><strong>Email:</strong> &nbsp;</h1> </div>
                                    <div>{user.email}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default UserProfile;
