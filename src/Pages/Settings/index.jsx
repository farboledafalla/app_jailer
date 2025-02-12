import { useState } from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import SettingsForm from '../../Components/SettingsForm';

function SettingsPage() {
   const [config, setConfig] = useState({
      institutionName: 'Academia Online',
      contactEmail: 'soporte@academia.com',
      language: 'es',
      theme: 'light',
   });

   const handleSave = (newConfig) => {
      setConfig(newConfig);
      alert('Configuración guardada con éxito');
   };

   return (
      <div className='flex'>
         <Sidebar />
         <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
            <Header />
            <div className='p-6'>
               {/* Encabezado */}
               <div className='flex items-center justify-between mb-6'>
                  <h1 className='text-2xl font-bold flex items-center gap-2'>
                     <SettingsIcon className='w-6 h-6 text-blue-500' />
                     Configuración
                  </h1>
               </div>

               {/* Formulario de Configuración */}
               <SettingsForm config={config} onSave={handleSave} />
            </div>
         </div>
      </div>
   );
}

export default SettingsPage;
