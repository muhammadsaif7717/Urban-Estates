import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>


            <div className="block md:hidden">
                <div className=" bg-[url('https://i.postimg.cc/cJ6b0zgK/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash-1.jpg')] bg-center bg-no-repeat bg-cover  flex justify-center items-center rounded-xl">
                    <div className="bg-white  w-full p-10 bg-opacity-70 rounded-xl">
                        <h1 className="text-center text-3xl font-bold mb-8">User Profile</h1>
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




            <div className="hidden md:block">
                <div className=" relative flex justify-center items-center rounded-xl">
                    <div>
                        <img src={'https://i.postimg.cc/cJ6b0zgK/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash-1.jpg'} className="w-[100%] rounded-xl brightness-75" />
                    </div>

                    <div className="bg-white  w-3/4 lg:w-2/4 p-10 bg-opacity-80 rounded-xl absolute">
                        <h1 className="text-center text-3xl font-bold mb-8">User Profile</h1>
                        <form className="space-y-4">
                            <div className="flex justify-center mb-5">
                                <img src={user.photoURL} className="w-1/4 rounded-full" />
                            </div>

                            <div className="hidden md:block">
                                <tr>
                                    <td><h1 className="text-lg"><strong>Name:</strong> &nbsp;</h1> </td>
                                    <td>{user.displayName}</td>
                                </tr>
                                <tr>
                                    <td><h1 className="text-lg"><strong>Email:</strong> &nbsp;</h1> </td>
                                    <td>{user.email}</td>
                                </tr>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default UserProfile;
