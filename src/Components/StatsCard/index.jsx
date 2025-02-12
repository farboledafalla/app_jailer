import PropTypes from 'prop-types';

const StatsCard = ({ title, value, icon: Icon }) => {
   return (
      <div className='bg-white shadow-md p-5 rounded-lg flex items-center gap-4'>
         <Icon size={32} className='text-blue-500' />
         <div>
            <h3 className='text-gray-600 text-sm'>{title}</h3>
            <p className='text-xl font-bold'>{value}</p>
         </div>
      </div>
   );
};

StatsCard.propTypes = {
   title: PropTypes.string.isRequired,
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   icon: PropTypes.elementType,
};

export default StatsCard;
