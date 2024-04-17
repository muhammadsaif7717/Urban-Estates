import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const About = () => {



    return (
        <div className="flex justify-center items-center h-auto md:h-[80vh] mb-10">
            <Helmet>
                <title>Urban Estates | About</title>
            </Helmet>
            <div className="animate__animated animate__zoomIn hero bg-gray-100 md:p-2 rounded-xl">
                <div className="hero-content text-center mt-12 mb-12">
                    <div className="">
                        <h1 className="text-3xl md:text-5xl font-bold">Hi There!</h1>
                        <p className="py-6 w-full">
                            Welcome to Urban Estates! It offers a diverse range of premium properties, including luxury beachfront villas, modern city apartments, cozy suburban homes, and more. With locations spanning from bustling metropolises to serene countryside settings, Urban Estates caters to individuals seeking exceptional living experiences tailored to their lifestyle preferences and needs.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            <b>Located at:</b>  Gulshan, Dhaka <br />
                        </p>
                        <p className="flex gap-1 items-center justify-center mx-auto mb-6">
                            <NavLink to='/'>

                            </NavLink>
                        </p>
                        <NavLink to='/'>
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                                Get Started
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
