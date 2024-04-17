import { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateProfile = () => {
    const { user, updateUserProfile, setRelaod } = useContext(AuthContext)
    console.log(user)

    useEffect(() => {
        setRelaod(true);
    }, [setRelaod]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo)



        try {
            // Update profile
            await updateUserProfile(name, photo);
            e.target.reset(); // Clear form inputs
            toast.success("Profile updated successfully! Please reload the site.");
        }
        catch (error) {
            toast.error("Error updating profile");
        }
    }


    return (
        <div>
            <Helmet>
                <title>Urban Estates | Update Profile</title>
            </Helmet>

            <div className="block md:hidden animate__animated animate__zoomIn">
                <div className=" bg-[url('https://i.postimg.cc/6qXDtgD0/lotus-design-n-print-Alp8v3dp-Gh0-unsplash.jpg')] bg-center bg-no-repeat bg-cover brightness-90  flex justify-center items-center rounded-xl">
                    <div className="bg-white w-full p-5 bg-opacity-80 rounded-xl ">
                        <h1 className="text-center text-2xl font-bold mb-8">Update Your Profile</h1>
                        <form className="space-y-4">
                            <div className="block md:hidden space-y-2">
                                <div className="flex flex-col">
                                    <label><strong>Name:</strong></label>
                                    <h1>{user.displayName}</h1>
                                </div>
                                <div className="flex flex-col">
                                    <label><strong>Email:</strong></label>
                                    <h1>{user.email}</h1>
                                </div>
                                <div className="flex flex-col">
                                    <label><strong>Photo URL:</strong></label>
                                    <h1>{user.photoURL.slice(0, 43)} ...</h1>
                                </div>
                            </div>
                        </form>
                        < hr className="border-dashed border-gray-400 my-5" />
                        <form onSubmit={handleFormSubmit} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo URL here"
                                    name="photo"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#F97316] border-none text-white">Update Profile</button>
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
                    className=" h-[80vh]  flex justify-center items-center rounded-2xl mb-10 border shadow-xl bg-[url('https://i.postimg.cc/6qXDtgD0/lotus-design-n-print-Alp8v3dp-Gh0-unsplash.jpg')]">
                    <div className="bg-white w-full md:w-[600px] lg:w-[700px] p-10 bg-opacity-90 rounded-xl ">
                        <h1 className="text-center text-3xl font-bold mb-8">Update Your Profile</h1>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div><h1 className="text-lg"><strong>Name:</strong> &nbsp;</h1> </div>
                                <div>{user.displayName}</div>
                            </div>

                            <div className="flex  items-center">
                                <div><h1 className="text-lg"><strong>Email:</strong> &nbsp;</h1> </div>
                                <div>{user.email}</div>
                            </div>

                            <div className="flex items-center">
                                <div><h1 className="text-lg"><strong>Photo URL:</strong> &nbsp;</h1> </div>
                                <div>{user.photoURL.slice(0, 43)} ...</div>
                            </div>
                        </div>
                        < hr className="border-dashed border-gray-400 my-5" />
                        <form onSubmit={handleFormSubmit} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"><strong>Name</strong></span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"><strong>Photo URL</strong></span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo URL here"
                                    name="photo"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary  bg-[#F97316] border-none text-white">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer></ToastContainer>

        </div>
    );
};

export default UpdateProfile;