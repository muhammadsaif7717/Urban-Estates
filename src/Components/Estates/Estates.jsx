import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";

const Estates = () => {
    const [estates, setEstates] = useState([])
    console.log(estates)

    useEffect(() => {
        fetch('estates.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])
    return (
        <div>
            <div className="">
                <h1 className="text-3xl font-bold text-center animate__animated animate__backInRight">Estates</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    estates.map(estate =>
                        <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;