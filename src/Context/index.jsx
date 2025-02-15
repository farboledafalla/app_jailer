import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const JailerContext = createContext();

export const JailerProvider = ({ children }) => {
   //Estados de usuario conectado
   const [loggerUser, setLoggerUser] = useState('');

   return (
      <JailerContext.Provider value={{ loggerUser, setLoggerUser }}>
         {children}
      </JailerContext.Provider>
   );
};

JailerProvider.propTypes = {
   children: PropTypes.object,
};
