import { GraduationCap } from 'lucide-react';
import PropTypes from 'prop-types';

function CourseCard({ course }) {
   return (
      <div className='bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition'>
         <h2 className='text-lg font-semibold flex items-center gap-2'>
            <GraduationCap className='w-5 h-5 text-green-500' />
            {course.title}
         </h2>
         <p className='text-gray-600'>Instructor: {course.instructor}</p>
         <p className='text-gray-500 text-sm'>Lecciones: {course.lessons}</p>
      </div>
   );
}

CourseCard.propTypes = {
   course: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      instructor: PropTypes.string.isRequired,
      lessons: PropTypes.number.isRequired,
   }).isRequired,
};

export default CourseCard;
