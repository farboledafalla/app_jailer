import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFocusInput } from '../../utils/focusInput';
import { LayoutAuth } from '../../Components/Layout/LayoutAuth';

export const Register_ = () => {
   const [name, setName] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   // Referencia al input nombre
   const nameRef = useRef(null);

   // Establecer foco en el input username
   useFocusInput(nameRef);

   const handleRegister = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post('http://localhost:3000/register', {
            name,
            username,
            password,
         });
         console.log(response.data);
         navigate('/login');
      } catch (error) {
         console.error('Error registering', error);
      }
   };

   return (
      <LayoutAuth>
         <div className='bg-white my-8 p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition w-96'>
            <div className='flex flex-col justify-center items-center'>
               <h1 className='text-3xl font-extrabold mb-5'>Register</h1>
               <form onSubmit={handleRegister}>
                  <div>
                     <label className='flex flex-col'>
                        Name
                        <input
                           type='text'
                           id='name'
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                           autoComplete='name'
                           ref={nameRef}
                           className='border border-gray-500 p-2 mt-2 mb-3 rounded-lg focus:outline-none focus:border-indigo-500'
                        />
                     </label>
                  </div>
                  <div>
                     <label className='flex flex-col'>
                        Username
                        <input
                           type='text'
                           id='username'
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           required
                           autoComplete='username'
                           className='border border-gray-500 p-2 mt-2 mb-3 rounded-lg focus:outline-none focus:border-indigo-500'
                        />
                     </label>
                  </div>
                  <div>
                     <label className='flex flex-col'>
                        Password
                        <input
                           type='password'
                           id='password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                           autoComplete='current-password'
                           className='border border-gray-500 p-2 mt-2 mb-3 rounded-lg focus:outline-none focus:border-indigo-500'
                        />
                     </label>
                  </div>
                  <div className='flex justify-center items-center mt-4'>
                     <button
                        type='submit'
                        className='bg-green-400 p-2 rounded-full text-white shadow-md hover:bg-green-600'
                     >
                        Register
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </LayoutAuth>
   );
};
