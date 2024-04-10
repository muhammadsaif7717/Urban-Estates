import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Estates from "../Estates/Estates";
import SideBar from "../SideBar/SideBar";
import 'animate.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Urban Estates | Home</title>
            </Helmet>

            <div className="mb-10">

                <div>
                    <Slider></Slider>
                </div>

                <div className="flex mt-10 gap-5 md:gap-10 flex-col md:flex-row">
                    <div className="flex-1">
                        <SideBar></SideBar>
                    </div>
                    <div>
                        <div className="">
                            <h1 className="text-3xl font-bold text-center animate__animated animate__backInRight">Estates</h1>
                        </div>
                        <Estates></Estates>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;