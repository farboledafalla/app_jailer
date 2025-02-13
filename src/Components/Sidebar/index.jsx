import { Link } from 'react-router-dom';
import { Home, BookOpen, Users, Settings } from 'lucide-react';

export const Sidebar = () => {
   return (
      <aside className='w-64 bg-gray-800 text-white h-screen p-5'>
         <h2 className='text-xl font-bold mb-6'>Admin Dashboard</h2>
         <nav>
            <ul>
               <li className='mb-4'>
                  <Link
                     to='/'
                     className='flex items-center gap-3 p-2 rounded hover:bg-gray-700'
                  >
                     <Home size={20} /> Inicio
                  </Link>
               </li>
               <li className='mb-4'>
                  <Link
                     to='/courses'
                     className='flex items-center gap-3 p-2 rounded hover:bg-gray-700'
                  >
                     <BookOpen size={20} /> Cursos
                  </Link>
               </li>
               <li className='mb-4'>
                  <Link
                     to='/users'
                     className='flex items-center gap-3 p-2 rounded hover:bg-gray-700'
                  >
                     <Users size={20} /> Usuarios
                  </Link>
               </li>
               <li>
                  <Link
                     to='/settings'
                     className='flex items-center gap-3 p-2 rounded hover:bg-gray-700'
                  >
                     <Settings size={20} /> Configuración
                  </Link>
               </li>
            </ul>
         </nav>
      </aside>
   );
};
