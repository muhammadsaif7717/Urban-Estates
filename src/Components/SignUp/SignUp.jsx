import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const { cerateUser, setRelaod } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password)

        if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            setRegisterError("Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long.");
            return;
        }

        //create user
        cerateUser(email, password)
            .then(result => {
                const newUser = result.user
                console.log(newUser)
                e.target.reset();
                return updateProfile(newUser, {
                    displayName: name,
                    photoURL: photo,
                });

            })
            .then(() => {
                toast.success('Login successful!', { autoClose: 1800 });
                setTimeout(() => {
                    // Navigate after a delay of 1900ms (adjust the delay time as needed)
                    navigate(location?.state ? location.state : '/');
                }, 1900);
            })
            .then(() => {
                setRelaod(true)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <>
            <Helmet>
                <title>Urban Estates | Register</title>
            </Helmet>

            <div className="my-10">
                <div className="hero min-h-screen bg-base-200">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required />
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
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative flex items-center justify-end">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full"
                                        required />
                                    <div onClick={() => setShowPassword(!showPassword)} className="absolute mr-5">
                                        {
                                            showPassword ? <FaRegEye /> : <FaEyeSlash />
                                        }
                                    </div>
                                </div>
                                <label className="label mt-3">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="text-center mb-7">
                            {
                                registerError && <p className="text-red-500 text-sm p-5">{registerError}</p>
                            }
                            <p>Already have an account? Please <Link to='/sign-in' className="text-blue-500">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default SignUp;