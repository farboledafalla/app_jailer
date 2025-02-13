import { useRoutes } from 'react-router-dom';

import { Dashboard_ } from '../Pages/Dashboard';
import { Courses_ } from '../Pages/Courses';
import { Users_ } from '../Pages/Users';
import { Settings_ } from '../Pages/Settings';

export const AppRoutes = () => {
   let routes = useRoutes([
      {
         path: '/',
         element: <Dashboard_ />,
      },
      {
         path: '/courses',
         element: <Courses_ />,
      },
      {
         path: '/users',
         element: <Users_ />,
      },
      {
         path: '/settings',
         element: <Settings_ />,
      },
   ]);

   return routes;
};
