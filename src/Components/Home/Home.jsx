import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import { Outlet } from 'react-router-dom'
import CategotiesBar from "../CategoriesBar/CategotiesBar";
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";


const Home = () => {
    const {user}=useContext(AuthContext)
    if(user){
        toast.success('Login successful!');
    }
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
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Home;