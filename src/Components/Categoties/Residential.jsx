import { Link, useLoaderData } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { RiCoinsFill } from "react-icons/ri";

const Residential = () => {
    const resEstaes = useLoaderData();
    console.log(resEstaes);
    return (
        <div className='text-center mt-10 animate__animated animate__zoomIn'>
            <h1 className="text-2xl font-bold text-center">Residential</h1>
            <p>Residential offerings encompass single-family homes, townhouses, apartments, student housing, senior communities, and vacation rentals for diverse living preferences etc.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 '>
                {
                    resEstaes.map(resEstae =>
                        <div key={resEstae.id} className=' border p-5 rounded-xl space-y-2 text-start hover:scale-105 hover:shadow-xl'  data-aos="zoom-in">
                            <div>
                                <img src={resEstae.image} className="rounded-xl" />
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>{resEstae.segment_name}</h1>
                            </div>
                            <div className='flex flex-col text-sm gap-1'>
                                {
                                    resEstae.facilities.map((facilitie, index) =>
                                        <div key={index}>
                                            <li className='text-gray-500'>{facilitie}</li>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='flex gap-5'>
                                <h1 className='text-sm'><strong>Status:</strong> {resEstae.status}</h1>
                                <div className='flex gap-2 items-center'>
                                    <RiCoinsFill className='text-green-600 text-xl' />
                                    <h1 className=' text-sm'>{resEstae.price}</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoLocationOutline className='font-bold text-xl text-blue-600' />
                                <h1 className=''>{resEstae.location}</h1>
                            </div>
                            <div>
                                <Link to={`/details/${resEstae.id}`}><button className='btn btn-ghost bg-orange-500 text-white hover:text-black'>View Property</button></Link>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Residential;
