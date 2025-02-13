import { useState, useEffect } from 'react';
import { Users, PlusCircle } from 'lucide-react';

import UserCard from '../../Components/UserCard';
import { Layout } from '../../Components/Layout';

export const Users_ = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      // Simulación de carga de usuarios desde una API
      const mockUsers = [
         {
            id: 1,
            name: 'Juan Pérez',
            email: 'juan@example.com',
            role: 'Alumno',
         },
         {
            id: 2,
            name: 'Ana López',
            email: 'ana@example.com',
            role: 'Instructor',
         },
         {
            id: 3,
            name: 'Carlos Díaz',
            email: 'carlos@example.com',
            role: 'Administrador',
         },
      ];
      setUsers(mockUsers);
   }, []);

   return (
      <Layout>
         <div className='p-6'>
            {/* Encabezado */}
            <div className='flex items-center justify-between mb-6'>
               <h1 className='text-2xl font-bold flex items-center gap-2'>
                  <Users className='w-6 h-6 text-blue-500' />
                  Usuarios
               </h1>
               <button className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition'>
                  <PlusCircle className='w-5 h-5' />
                  Agregar Usuario
               </button>
            </div>

            {/* Lista de Usuarios */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {users.length > 0 ? (
                  users.map((user) => <UserCard key={user.id} user={user} />)
               ) : (
                  <p>No hay usuarios registrados.</p>
               )}
            </div>
         </div>{' '}
      </Layout>
   );
};
