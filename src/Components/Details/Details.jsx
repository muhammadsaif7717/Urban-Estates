import { useLoaderData, useParams } from 'react-router-dom'

const Details = () => {
    const resEstates = useLoaderData();
    const {id} = useParams()
    const selectedResEstate = resEstates.find(resEstate => resEstate.id === parseInt(id))
    console.log(selectedResEstate)
    return (
        <div className='flex flex-col md:flex-row justify-center gap-5'>
            <div className='flex-1'>
                <img src={selectedResEstate.image} className="h-[220px] md:h-auto w-full rounded-xl" />
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-2xl'>{selectedResEstate.estate_title}</h1>
                <h1 className=' text-black text-lg'>{selectedResEstate.segment_name}</h1>
                <h1 className=' text-sm'>{selectedResEstate.description}</h1>
                <h1 className='font-bold text-lg'>Area: {selectedResEstate.area}</h1>
                <h1 className='font-bold text-lg'>Location: {selectedResEstate.location}</h1>
                <h1 className='font-bold text-lg'>{selectedResEstate.status}</h1>
                <h1 className='font-bold text-lg'>Price: {selectedResEstate.price}</h1>
                <div>
                    <h1 className='font-bold text-lg'>Facilites:</h1>
                    <div className='flex  flex-col md:flex-row gap-3 '>
                        {
                            selectedResEstate.facilities.map((facilitie, index) =>
                                <li key={index}>{facilitie}</li>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;