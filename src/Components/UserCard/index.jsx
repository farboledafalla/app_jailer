import { User } from 'lucide-react';
import PropTypes from 'prop-types';

function UserCard({ user }) {
   return (
      <div className='bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition'>
         <h2 className='text-lg font-semibold flex items-center gap-2'>
            <User className='w-5 h-5 text-gray-500' />
            {user.name}
         </h2>
         <p className='text-gray-600'>{user.email}</p>
         <p className='text-gray-500 text-sm'>Rol: {user.role}</p>
      </div>
   );
}

UserCard.propTypes = {
   user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
   }).isRequired,
};

export default UserCard;
