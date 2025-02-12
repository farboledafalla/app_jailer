import { useState, useEffect } from 'react';
import { BookOpen, PlusCircle } from 'lucide-react';

import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import CourseCard from '../../Components/CourseCard';

function Courses() {
   const [courses, setCourses] = useState([]);

   useEffect(() => {
      // Simulación de carga de cursos desde una API
      const mockCourses = [
         {
            id: 1,
            title: 'React desde Cero',
            instructor: 'Juan Pérez',
            lessons: 12,
         },
         {
            id: 2,
            title: 'Node.js y Express',
            instructor: 'Ana López',
            lessons: 8,
         },
         {
            id: 3,
            title: 'Bases de Datos con MySQL',
            instructor: 'Carlos Díaz',
            lessons: 10,
         },
      ];
      setCourses(mockCourses);
   }, []);

   return (
      <div className='flex'>
         <Sidebar />
         <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
            <Header />
            <div className='p-6'>
               {/* Encabezado */}
               <div className='flex items-center justify-between mb-6'>
                  <h1 className='text-2xl font-bold flex items-center gap-2'>
                     <BookOpen className='w-6 h-6 text-blue-500' />
                     Cursos
                  </h1>
                  <button className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition'>
                     <PlusCircle className='w-5 h-5' />
                     Agregar Curso
                  </button>
               </div>

               {/* Lista de Cursos */}
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {courses.length > 0 ? (
                     courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                     ))
                  ) : (
                     <p>No hay cursos disponibles.</p>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Courses;
