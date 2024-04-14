import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const { user, updateUserProfile, setRelaod } = useContext(AuthContext)
    console.log(user)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        console.log(name, photo)

        //update parofile
        updateUserProfile(name, photo)
            .then(() => {
                setRelaod(true)
                e.target.reset();
            })


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
                                    <label><strong>Photo URL:</strong></label>
                                    <h1>{user.photoURL}</h1>
                                </div>
                            </div>
                        </form>

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
                                <button className="btn btn-primary">Update Profile</button>
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
                        <form className="space-y-4">
                            <tr>
                                <td><h1 className="text-lg"><strong>Name:</strong> &nbsp;</h1> </td>
                                <td>{user.displayName}</td>
                            </tr>
                            <tr>
                                <td><h1 className="text-lg"><strong>Email:</strong> &nbsp;</h1> </td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td><h1 className="text-lg"><strong>Photo URL:</strong> &nbsp;</h1> </td>
                                <td>{user.photoURL}</td>
                            </tr>
                        </form>
                        <br /> <br />
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
                                <button className="btn btn-primary">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default UpdateProfile;