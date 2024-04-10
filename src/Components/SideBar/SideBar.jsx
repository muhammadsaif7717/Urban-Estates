import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="border p-1  rounded-xl">
            <h1 className="text-3xl font-bold text-center md:text-start">Categories</h1>
            <ul className="text-lg">
                <div className="my-4 font-bold text-gray-500 text-center md:text-start"><Link to="/residential" className="hover:text-gray-400">Residential</Link></div>
                <div className="my-4 font-bold text-gray-500 text-center md:text-start"><Link to="/commercial" className="hover:text-gray-400">Commercial</Link></div>
                <div className="my-4 font-bold text-gray-500 text-center md:text-start"><Link to="/land" className="hover:text-gray-400">Land</Link></div>
                <div className="my-4 font-bold text-gray-500 text-center md:text-start"><Link to="/industrial" className="hover:text-gray-400">Industrial</Link></div>
                <div className="my-4 font-bold text-gray-500 text-center md:text-start"><Link to="/speciality" className="hover:text-gray-400"> Speciality</Link></div>
                <div className="my-4 font-bold text-gray-500 text-center md:text-start"><Link to="/luxury" className="hover:text-gray-400">Luxury</Link></div>
                <div className="my-4 font-bold text-gray-500 text-center md:text-start"><Link to="/govt-and-public" className="hover:text-gray-400">Government & Public</Link></div>
                <div className="my-4 font-bold text-gray-500 text-center md:text-start"><Link to="/hospitality" className="hover:text-gray-400">Hospitality</Link></div>
            </ul>
        </div>
    );
};

export default SideBar;