import { NavLink } from "react-router-dom";
import './CategotiesBar.css'


const SideBar = () => {
    return (
        <div className="animate__animated animate__zoomIn rounded-xl mt-5 md:mt-10 md:mb-5  border-2  py-5 " >
            <h1 className=" text-2xl md:text-3xl font-bold text-center">Categories</h1>

            <div className=" text-sm flex gap-3 md:gap-5 justify-center ">
                <div className="hover:scale-110 my-4 font-bold text-gray-500 text-center  "><NavLink to="/">Residential</NavLink></div>
                <div className="hover:scale-110 my-4 font-bold text-gray-500 text-center "><NavLink to="/commercial">Commercial</NavLink></div>
                <div className="hover:scale-110 my-4 font-bold text-gray-500 text-center "><NavLink to="/land">Land</NavLink></div>
                <div className="hover:scale-110 my-4 font-bold text-gray-500 text-center "><NavLink to="/industrial">Industrial</NavLink></div>
            </div>

        </div>
    );
};

export default SideBar;