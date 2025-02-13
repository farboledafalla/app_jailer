import { useRoutes } from 'react-router-dom';

import { Dashboard_ } from '../Pages/Dashboard';
import { Courses_ } from '../Pages/Courses';
import { Users_ } from '../Pages/Users';
import { Settings_ } from '../Pages/Settings';
import { NotFound_ } from '../Pages/NotFound';
import { Login_ } from '../Pages/Auth/Login';
import { Register_ } from '../Pages/Auth/Register';

export const AppRoutes = () => {
   let routes = useRoutes([
      {
         path: '/',
         element: <Dashboard_ />,
      },
      {
         path: '/login',
         element: <Login_ />,
      },
      {
         path: '/register',
         element: <Register_ />,
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
      {
         path: '/*',
         element: <NotFound_ />,
      },
   ]);

   return routes;
};
