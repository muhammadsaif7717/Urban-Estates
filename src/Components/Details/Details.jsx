import { useLoaderData, useParams } from 'react-router-dom'

const Details = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const selectedEstate = estates.find(estate => estate.id === parseInt(id))
    console.log(selectedEstate)
    return (
        <div className='flex flex-col md:flex-row justify-center gap-5'>
            <div className='flex-1'>
                <img src={selectedEstate.image} className="h-[220px] md:h-auto w-full rounded-xl" />
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-2xl'>{selectedEstate.estate_title}</h1>
                <h1 className=' text-black text-lg'>{selectedEstate.segment_name}</h1>
                <h1 className=' text-sm'>{selectedEstate.description}</h1>
                <h1 className='font-bold text-lg'>Area: {selectedEstate.area}</h1>
                <h1 className='font-bold text-lg'>Location: {selectedEstate.location}</h1>
                <h1 className='font-bold text-lg'>{selectedEstate.status}</h1>
                <h1 className='font-bold text-lg'>Price: {selectedEstate.price}</h1>
                <div>
                    <h1 className='font-bold text-lg'>Facilites:</h1>
                    <div className='flex  flex-col md:flex-row gap-3 '>
                        {
                            selectedEstate.facilities.map((facilitie, index) =>
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