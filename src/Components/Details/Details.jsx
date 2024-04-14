import { Link, useLoaderData, useParams } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { RiCoinsFill } from "react-icons/ri";
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const resEstates = useLoaderData();
    const { id } = useParams()
    const selectedResEstate = resEstates.find(resEstate => resEstate.id === parseInt(id))
    console.log(selectedResEstate)
    return (
    <div className='flex justify-center items-center lg:h-[80vh] animate__animated animate__zoomIn'>
            <div className='flex flex-col lg:flex-row items-center md:items-start lg:items-center mb-10'>
            <Helmet>
                <title>Urban Estates | Details - {id}</title>
            </Helmet>
            <div className='flex-1 animate__animated animate__fadeInLeft'>
                <img src={selectedResEstate.image} className=" h-auto w-full rounded-xl" />
            </div>

            <div className='flex-1 animate__animated animate__fadeInRight'>
                <div className=' p-5 space-y-2 text-start'>
                    <div>
                        <h1 className='font-bold text-[30px]'>{selectedResEstate.estate_title}</h1>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl text-gray-500'>{selectedResEstate.segment_name}</h1>
                    </div>
                    <div>
                        <h1 className='text-sm'>{selectedResEstate.description}</h1>
                    </div>
                    <div className='flex flex-col text-sm gap-1'>
                        {
                            selectedResEstate.facilities.map((facilitie, index) =>
                                <div key={index}>
                                    <li className='text-gray-500'>{facilitie}</li>
                                </div>
                            )
                        }
                    </div>
                    <div className='flex flex-row gap-5'>
                        <h1 className='text-sm'><strong>Status:</strong> {selectedResEstate.status}</h1>
                        <div className='flex gap-2 items-center'>
                            <RiCoinsFill className='text-green-600 text-xl' />
                            <h1 className=' text-sm'>{selectedResEstate.price}</h1>
                        </div>
                    </div>

                    <div className='flex gap-5'>
                        <div>
                            <h1 className='text-sm'><strong>Area:</strong> {selectedResEstate.area}</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoLocationOutline className='font-bold text-xl text-blue-600' />
                            <h1 className=''>{selectedResEstate.location}</h1>
                        </div>
                    </div>
                    <div>
                        <Link><button className='btn btn-ghost bg-orange-500 text-white hover:text-black'>Buy Now</button></Link>
                    </div>

                </div>


            </div>
        </div>
    </div>
    );
};

export default Details;