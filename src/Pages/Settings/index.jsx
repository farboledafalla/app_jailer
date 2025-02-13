import { useState } from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

import { Layout } from '../../Components/Layout';
import SettingsForm from '../../Components/SettingsForm';

export const Settings_ = () => {
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
      <Layout>
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
      </Layout>
   );
};
