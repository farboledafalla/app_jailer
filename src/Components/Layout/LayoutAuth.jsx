import { SidebarAuth } from '../Sidebar/SidebarAuth';
import { HeaderAuth } from '../Header/HeaderAuth';

import PropTypes from 'prop-types';

export const LayoutAuth = ({ children }) => {
   return (
      <div className='flex'>
         <SidebarAuth />
         <div className='flex-1 p-6 bg-gray-100 min-h-screen '>
            <HeaderAuth />
            <div className='flex justify-center items-center'>{children}</div>
         </div>
      </div>
   );
};

LayoutAuth.propTypes = {
   children: PropTypes.object,
};
