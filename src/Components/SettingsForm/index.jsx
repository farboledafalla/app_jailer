import { useState } from 'react';
import PropTypes from 'prop-types';

function SettingsForm({ config, onSave }) {
   const [form, setForm] = useState(config);

   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onSave(form);
   };

   return (
      <form
         onSubmit={handleSubmit}
         className='bg-white p-6 rounded-lg shadow-md border border-gray-200'
      >
         <div className='mb-4'>
            <label className='block text-gray-700 font-semibold'>
               Nombre de la Institución
            </label>
            <input
               type='text'
               name='institutionName'
               value={form.institutionName}
               onChange={handleChange}
               className='w-full p-2 border rounded-lg'
            />
         </div>

         <div className='mb-4'>
            <label className='block text-gray-700 font-semibold'>
               Correo de Contacto
            </label>
            <input
               type='email'
               name='contactEmail'
               value={form.contactEmail}
               onChange={handleChange}
               className='w-full p-2 border rounded-lg'
            />
         </div>

         <div className='mb-4'>
            <label className='block text-gray-700 font-semibold'>Idioma</label>
            <select
               name='language'
               value={form.language}
               onChange={handleChange}
               className='w-full p-2 border rounded-lg'
            >
               <option value='es'>Español</option>
               <option value='en'>Inglés</option>
               <option value='fr'>Francés</option>
            </select>
         </div>

         <div className='mb-4'>
            <label className='block text-gray-700 font-semibold'>Tema</label>
            <select
               name='theme'
               value={form.theme}
               onChange={handleChange}
               className='w-full p-2 border rounded-lg'
            >
               <option value='light'>Claro</option>
               <option value='dark'>Oscuro</option>
            </select>
         </div>

         <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition'
         >
            Guardar Configuración
         </button>
      </form>
   );
}

SettingsForm.propTypes = {
   config: PropTypes.shape({
      institutionName: PropTypes.string.isRequired,
      contactEmail: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      theme: PropTypes.string.isRequired,
   }).isRequired,
   onSave: PropTypes.func.isRequired,
};

export default SettingsForm;
