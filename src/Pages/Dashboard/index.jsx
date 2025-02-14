import { Users, BookOpen, GraduationCap } from 'lucide-react';

import { Layout } from '../../Components/Layout';
import StatsCard from '../../Components/StatsCard';
import CourseList from '../../Components/CourseList';

export const Dashboard_ = () => {
   const cursos = [
      { id: 1, nombre: 'React desde Cero', instructor: 'Juan Pérez' },
      { id: 2, nombre: 'Node.js y Express', instructor: 'María López' },
      { id: 3, nombre: 'Bases de Datos con MySQL', instructor: 'Carlos Gómez' },
   ];

   return (
      <Layout>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
            <StatsCard title='Total Usuarios' value='250' icon={Users} />
            <StatsCard title='Cursos Activos' value='15' icon={BookOpen} />
            <StatsCard
               title='Estudiantes Inscritos'
               value='1,200'
               icon={GraduationCap}
            />
         </div>
         <div className='mt-6'>
            <CourseList courses={cursos} />
         </div>
      </Layout>
   );
};
