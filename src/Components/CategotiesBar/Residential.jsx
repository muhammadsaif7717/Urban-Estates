import { Link, useLoaderData } from 'react-router-dom';

const Residential = () => {
    const resEstaes = useLoaderData();
    console.log(resEstaes);
    return (
        <div className='text-center mt-10'>
            <h1 className="text-2xl font-bold text-center">Residential</h1>
            <p>Residential offerings encompass single-family homes, townhouses, apartments, student housing, senior communities, and vacation rentals for diverse living preferences etc.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    resEstaes.map(resEstae=>
                    <div key={resEstae.id} className='h-fit border p-5 rounded-xl space-y-2 text-start'>
                        <img src={resEstae.image} className="rounded-xl" />
                        <h1>{resEstae.segment_name}</h1>
                        <button>
                            <Link to={`/details/${resEstae.id}`}>View Property</Link>
                        </button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Residential;
