import { Link } from 'react-router-dom';
import { KeyRound, ScanFace, LockKeyhole } from 'lucide-react';

export const SidebarAuth = () => {
   return (
      <aside className='w-64 bg-gray-800 text-white h-screen p-5'>
         <h2 className='text-3xl font-bold mb-6 text-center'>Jailer Classes</h2>
         <nav className='mt-12'>
            <ul>
               <li className='mb-4'>
                  <Link
                     to='/login'
                     className='flex items-center gap-3 p-2 rounded hover:bg-gray-700'
                  >
                     <KeyRound size={20} /> Login
                  </Link>
               </li>
               <li className='mb-4'>
                  <Link
                     to='/register'
                     className='flex items-center gap-3 p-2 rounded hover:bg-gray-700'
                  >
                     <ScanFace size={20} /> Register
                  </Link>
               </li>
               <li className='mb-4'>
                  <Link
                     to='/forgotten'
                     className='flex items-center gap-3 p-2 rounded hover:bg-gray-700'
                  >
                     <LockKeyhole size={20} /> Forgotten Password
                  </Link>
               </li>
            </ul>
         </nav>
      </aside>
   );
};
