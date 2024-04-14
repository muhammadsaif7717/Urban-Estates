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
                        <h1 className="text-3xl md:text-5xl font-bold">Hello People!</h1>
                        <p className="py-6 w-full">
                            Welcome to Book Vibe! Our mission is to ignite a passion for
                            reading by offering a carefully curated selection of books for all
                            ages and interests. With a commitment to personalized service and
                            community engagement, we strive to create a welcoming environment
                            where every reader feels at home. Discover the joy of storytelling
                            with us.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            <b>Located at:</b>  Gulshan, Dhaka <br />
                        </p>
                        <p className="flex gap-1 items-center justify-center mx-auto mb-6">
                            <NavLink to='/'>

                            </NavLink>
                        </p>
                        <NavLink to='/'>
                            <button className="btn bg-green-400 hover:bg-green-600 text-white border-none">
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
