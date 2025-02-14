import { Sidebar } from '../Sidebar';
import { Header } from '../Header';

import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
   return (
      <div className='flex'>
         <Sidebar />
         <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
            <Header />
            {children}
         </div>
      </div>
   );
};

Layout.propTypes = {
   children: PropTypes.object,
};
