export const Header = () => {
   return (
      <header className='bg-white shadow-md p-4 flex justify-between items-center rounded-lg'>
         <h1 className='text-xl font-semibold'>Panel de Administración</h1>
         <button className='bg-red-500 text-white px-4 py-2 rounded'>
            Cerrar Sesión
         </button>
      </header>
   );
};
