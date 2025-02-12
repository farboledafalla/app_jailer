import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from '../Dashboard';

import './App.css';

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
         </Routes>
      </Router>
   );
}

export default App;
