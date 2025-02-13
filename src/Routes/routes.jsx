import { useRoutes } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import Courses from '../Pages/Courses';
import { Settings, Users } from 'lucide-react';

export const AppRoutes = () => {
   let routes = useRoutes([
      {
         path: '/',
         element: <Dashboard />,
      },
      {
         path: '/courses',
         element: <Courses />,
      },
      {
         path: '/users',
         element: <Users />,
      },
      {
         path: '/settings',
         element: <Settings />,
      },
   ]);

   return routes;
};
