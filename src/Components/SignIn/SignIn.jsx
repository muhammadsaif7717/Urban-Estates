import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";




const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SignIn = () => {
    const { signInUser, sighInWithGoogle, sighInWithGithub, setRelaod } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    console.log('Locatoin In The Login Page', location)


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        //Signin  user
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                setRelaod(true)
                toast.success('Login successful!', { autoClose: 1800 });
                setTimeout(() => {
                    // Navigate after a delay of 1900ms (adjust the delay time as needed)
                    navigate(location?.state ? location.state : '/');
                }, 1900);
            })
            .catch(error => {
                console.log(error.message)
                toast.error('Invalid email or password');
            })
    }

    //sign in with google
    const handleGoogleSignInButton = () => {
        sighInWithGoogle(googleProvider)
            .then(result => {
                console.log(result.user)

                toast.success('Login successful!', { autoClose: 1800 });
                setTimeout(() => {
                    // Navigate after a delay of 1900ms (adjust the delay time as needed)
                    navigate(location?.state ? location.state : '/');
                }, 1900);

            })
            .catch(error => {
                console.log(error.message)
            })

    }

    //sign in with github
    const handleGithubSignInButton = () => {
        sighInWithGithub(githubProvider)
            .then(result => {
                console.log(result.user)

                toast.success('Login successful!', { autoClose: 1800 });
                setTimeout(() => {
                    // Navigate after a delay of 1900ms (adjust the delay time as needed)
                    navigate(location?.state ? location.state : '/');
                }, 1900);
            })
            .catch(error => {
                console.log(error.message)
            })

    }


    return (
        <>
            <Helmet>
                <title>Urban Estates | Sign In</title>
            </Helmet>

            <div className="mb-10">
                <div 
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="hero min-h-screen bg-base-200 rounded-xl bg-[url('https://i.postimg.cc/BQPfgH25/jack-white-Ko-UAu-P5-KSjc-unsplash.jpg')]">
                    <div className="card shrink-0 w-[320px] md:w-[400px] shadow-2xl bg-base-100 animate__animated animate__pulse opacity-90">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered" required />
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <hr className="border-gray-300 w-1/4" />
                                <span className="mx-3 text-gray-500">Or</span>
                                <hr className="border-gray-300 w-1/4" />
                            </div>
                        </form>

                        <div className="flex flex-col gap-5 items-center mb-8">
                            <div onClick={handleGoogleSignInButton} className="flex items-center justify-center gap-3 border-2 border-blue-500 p-3 rounded-xl w-3/4">
                                <FaGoogle className="text-3xl text-blue-500" />
                                <button className=" bg-transparent text-blue-500">Login With Google</button>
                            </div>
                            <div onClick={handleGithubSignInButton} className="flex items-center justify-center gap-3 border-2 border-gray-500 p-3 rounded-xl w-3/4">
                                <FaGithub className="text-3xl" />
                                <button className=" bg-transparent text-black">Login With Github</button>
                            </div>
                        </div>
                        <div className="text-center mb-7">
                            <p>New to Urban Estates? Please <Link to='/sign-up' className="text-blue-500">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default SignIn;