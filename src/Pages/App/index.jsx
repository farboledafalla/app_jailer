import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from '../../Routes/routes';

import { JailerProvider } from '../../Context';

import './App.css';

function App() {
   return (
      <JailerProvider>
         <BrowserRouter>
            <AppRoutes />
         </BrowserRouter>
      </JailerProvider>
   );
}

export default App;
