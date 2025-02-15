import { useRef } from 'react';

import { LayoutAuth } from '../../Components/Layout/LayoutAuth';
import { useFocusInput } from '../../utils/focusInput';

export const ForgotPassword_ = () => {
   //Foco del input
   const emailRef = useRef(null);
   useFocusInput(emailRef);

   const handleForgotPassword = async (e) => {
      e.prefentDefault();
   };

   return (
      <LayoutAuth>
         <div className='bg-white my-8 p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition w-96'>
            <div className='flex flex-col justify-center items-center'>
               <h1 className='text-3xl font-extrabold mb-5'>Forgot Password</h1>
               <form onSubmit={handleForgotPassword}>
                  <div>
                     <label className='flex flex-col'>
                        Email
                        <input
                           type='text'
                           id='username'
                           // value={username}
                           // onChange={(e) => setUsername(e.target.value)}
                           required
                           autoComplete='username'
                           ref={emailRef}
                           className='border border-gray-500 p-2 mt-2 mb-3 rounded-lg focus:outline-none focus:border-indigo-500'
                        />
                     </label>
                  </div>
                  <div className='flex justify-center items-center mt-4'>
                     <button
                        type='submit'
                        className='bg-green-400 p-2 rounded-full text-white shadow-md hover:bg-green-600'
                     >
                        Enviar
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
