import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Users, Settings } from 'lucide-react';

export const Sidebar = () => {
   //Variables con estilos para rutas activa/inactiva
   const activeStyle = 'bg-gray-700';
   const normalStyle =
      'flex items-center gap-3 p-2 rounded-lg hover:bg-gray-500';

   return (
      <aside className='w-64 bg-gray-800 text-white h-screen p-5'>
         <h2 className='text-xl font-bold mb-6'>Admin Dashboard</h2>
         <nav>
            <ul>
               <li className='mb-4'>
                  <NavLink
                     to='/'
                     className={({ isActive }) =>
                        `${normalStyle} ${isActive ? activeStyle : undefined}`
                     }
                  >
                     <Home size={20} /> Inicio
                  </NavLink>
               </li>
               <li className='mb-4'>
                  <NavLink
                     to='/courses'
                     className={({ isActive }) =>
                        `${normalStyle} ${isActive ? activeStyle : undefined}`
                     }
                  >
                     <BookOpen size={20} /> Cursos
                  </NavLink>
               </li>
               <li className='mb-4'>
                  <NavLink
                     to='/users'
                     className={({ isActive }) =>
                        `${normalStyle} ${isActive ? activeStyle : undefined}`
                     }
                  >
                     <Users size={20} /> Usuarios
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to='/settings'
                     className={({ isActive }) =>
                        `${normalStyle} ${isActive ? activeStyle : undefined}`
                     }
                  >
                     <Settings size={20} /> Configuración
                  </NavLink>
               </li>
            </ul>
         </nav>
      </aside>
   );
};
