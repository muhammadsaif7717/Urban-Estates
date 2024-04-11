import { NavLink } from "react-router-dom";
import './SideBar.css'


const SideBar = () => {
    return (
        <div className="rounded-xl my-10" >
            <h1 className="text-3xl font-bold text-center">Categories</h1>

            <div className="text-sm  flex gap-5 border-2 p-1 justify-center mt-4">
                <div className="my-4 font-bold text-gray-500 text-center  "><NavLink to="/">All Estates</NavLink></div>
                <div className="my-4 font-bold text-gray-500 text-center  "><NavLink to="/residential">Residential</NavLink></div>
                <div className="my-4 font-bold text-gray-500 text-center "><NavLink to="/commercial">Commercial</NavLink></div>
                <div className="my-4 font-bold text-gray-500 text-center "><NavLink to="/land">Land</NavLink></div>
                <div className="my-4 font-bold text-gray-500 text-center "><NavLink to="/industrial">Industrial</NavLink></div>
                <div className="my-4 font-bold text-gray-500 text-center "><NavLink to="/speciality"> Speciality</NavLink></div>
                <div className="my-4 font-bold text-gray-500 text-center "><NavLink to="/luxury">Luxury</NavLink></div>
                <div className="my-4 font-bold text-gray-500 text-center "><NavLink to="/govt-and-public">Government & Public</NavLink></div>
                <div className="my-4 font-bold text-gray-500 text-center "><NavLink to="/hospitality">Hospitality</NavLink></div>
            </div>

        </div>
    );
};

export default SideBar;