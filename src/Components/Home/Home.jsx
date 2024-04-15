import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import { Outlet } from 'react-router-dom'
import CategotiesBar from "../CategoriesBar/CategotiesBar";




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

                <div className="flex flex-col">
                    <div>
                        <CategotiesBar></CategotiesBar>
                    </div>
                    <div>
                       <Outlet></Outlet>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;