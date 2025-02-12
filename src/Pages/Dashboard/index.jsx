import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import StatsCard from '../../Components/StatsCard';
import CourseList from '../../Components/CourseList';
import { Users, BookOpen, GraduationCap } from 'lucide-react';

const Dashboard = () => {
   const cursos = [
      { id: 1, nombre: 'React desde Cero', instructor: 'Juan Pérez' },
      { id: 2, nombre: 'Node.js y Express', instructor: 'María López' },
      { id: 3, nombre: 'Bases de Datos con MySQL', instructor: 'Carlos Gómez' },
   ];

   return (
      <div className='flex'>
         <Sidebar />
         <div className='flex-1 p-6 bg-gray-100 min-h-screen'>
            <Header />
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
         </div>
      </div>
   );
};

export default Dashboard;
