import { NavLink } from 'react-router-dom';
import { KeyRound, ScanFace, LockKeyhole } from 'lucide-react';

export const SidebarAuth = () => {
   //Variables con estilos para rutas activa/inactiva
   const activeStyle = 'bg-gray-700';
   const normalStyle =
      'flex items-center gap-3 p-2 rounded-lg hover:bg-gray-500';

   return (
      <aside className='w-64 bg-gray-800 text-white h-screen p-5'>
         <h2 className='text-3xl font-bold mb-6 text-center'>Jailer Classes</h2>
         <nav className='mt-12'>
            <ul>
               <li className='mb-4'>
                  <NavLink
                     to='/login'
                     className={({ isActive }) =>
                        `${normalStyle} ${isActive ? activeStyle : undefined}`
                     }
                  >
                     <KeyRound size={20} /> Login
                  </NavLink>
               </li>
               <li className='mb-4'>
                  <NavLink
                     to='/register'
                     className={({ isActive }) =>
                        `${normalStyle} ${isActive ? activeStyle : undefined}`
                     }
                  >
                     <ScanFace size={20} /> Register
                  </NavLink>
               </li>
               <li className='mb-4'>
                  <NavLink
                     to='/forgotten'
                     className={({ isActive }) =>
                        `${normalStyle} ${isActive ? activeStyle : undefined}`
                     }
                  >
                     <LockKeyhole size={20} /> Forgotten Password
                  </NavLink>
               </li>
            </ul>
         </nav>
      </aside>
   );
};
