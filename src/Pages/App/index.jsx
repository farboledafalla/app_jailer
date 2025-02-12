import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from '../Dashboard';
import Courses from '../Courses';
import Users from '../Users';
import Settings from '../Settings';

import './App.css';

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/users' element={<Users />} />
            <Route path='/settings' element={<Settings />} />
         </Routes>
      </Router>
   );
}

export default App;
