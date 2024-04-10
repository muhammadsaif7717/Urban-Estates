import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estate = ({ estate }) => {
    return (
        <div className='border p-5 rounded-xl space-y-3'>
            <div>
            <img src={estate.image} className="rounded-xl h-[210px] md:h-[130px] lg:h-[250px] w-full brightness-90" />
            </div>
            <div>
            <h1 className='text-xl font-bold'>{estate.segment_name}</h1>
            </div>
            <div>
            <Link to={`/details/${estate.id}`} className='px-3 py-2  btn-ghost bg-orange-500 text-white text-xs rounded'>View Property</Link>
            </div>
        </div>
    );
};

export default Estate;
Estate.propTypes = {
    estate: PropTypes.node,
}