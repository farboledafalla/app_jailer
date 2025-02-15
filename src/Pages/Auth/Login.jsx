import { useState, useRef, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { LayoutAuth } from '../../Components/Layout/LayoutAuth';
import { useFocusInput } from '../../utils/focusInput';
import { UserInfo } from '../../Components/Auth/UserInfo';
import { JailerContext } from '../../Context';

import axios from 'axios';

export const Login_ = () => {
   const context = useContext(JailerContext);

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   //const location = useLocation();

   // Obtiene la ruta desde donde viene, si no existe deja la raiz
   //const from = location.state?.from?.pathname || '/';

   //Referencia al input que tendrá el foco
   const usernameRef = useRef(null);
   useFocusInput(usernameRef);

   const handleLogin = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post('http://localhost:3000/login', {
            username,
            password,
         });

         // Verifica si `response` tiene datos antes de usarlos
         if (response && response.data) {
            console.log('Login exitoso', response.data);
            navigate('/');
         } else {
            console.error('Respuesta vacía del servidor');
         }

         localStorage.setItem('token', response.data.token);
         console.log(response.data);
         // context.setLoggedUser(UserInfo());

         //Navega a la ruta desde doncde intentó ingresar
         //navigate(from, { replace: true });
      } catch (error) {
         console.error(
            'Error en el login: ',
            error.response?.data || error.message
         );
         alert(error.response.data.error);
      }
   };

   return (
      <LayoutAuth>
         <div className='bg-white my-8 p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition w-96'>
            <div className='flex flex-col justify-center items-center'>
               <h1 className='text-3xl font-extrabold mb-5'>Login</h1>
               <form onSubmit={handleLogin}>
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
                           ref={usernameRef}
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
                        Login
                     </button>
                  </div>
               </form>
               {/* <div className='mt-6 text-center text-blue-500 underline underline-offset-2'>
                  <NavLink to='/register'>Registrarme</NavLink>
               </div> */}
            </div>
         </div>
      </LayoutAuth>
   );
};
