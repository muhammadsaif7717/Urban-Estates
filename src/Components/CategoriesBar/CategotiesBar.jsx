import { NavLink } from "react-router-dom";
import './CategotiesBar.css'


const SideBar = () => {
    return (
        <div className="animate__animated animate__zoomIn rounded-xl my-10 border-2  py-5 " >
            <h1 className=" text-3xl font-bold text-center">Categories</h1>

            <div className=" text-sm  flex gap-5 p-1 justify-center ">
                <div className="hover:scale-110 my-4 font-bold text-gray-500 text-center  "><NavLink to="/">Residential</NavLink></div>
                <div className="hover:scale-110 my-4 font-bold text-gray-500 text-center "><NavLink to="/commercial">Commercial</NavLink></div>
                <div className="hover:scale-110 my-4 font-bold text-gray-500 text-center "><NavLink to="/land">Land</NavLink></div>
                <div className="hover:scale-110 my-4 font-bold text-gray-500 text-center "><NavLink to="/industrial">Industrial</NavLink></div>
            </div>

        </div>
    );
};

export default SideBar;