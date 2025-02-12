import PropTypes from 'prop-types';

const CourseList = ({ courses }) => {
   return (
      <div className='bg-white shadow-md p-5 rounded-lg'>
         <h3 className='text-lg font-semibold mb-4'>Cursos Disponibles</h3>
         <ul>
            {courses.map((course) => (
               <li key={course.id} className='p-3 border-b last:border-none'>
                  {course.nombre} - {course.instructor}
               </li>
            ))}
         </ul>
      </div>
   );
};

CourseList.propTypes = {
   courses: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         name: PropTypes.string.isRequired,
         instructor: PropTypes.string.isRequired,
      })
   ).isRequired,
};

export default CourseList;
