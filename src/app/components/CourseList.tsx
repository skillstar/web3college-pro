import CourseCard from "@/app/components/CourseCard";
import { CourseTypeCard } from "@/types";
import { mockCourses } from "@/mock/courseMockData";

type CourseListProps = {
  className?: string;
};

const CourseList = ({ className = "" }: CourseListProps) => {
  return (
    <div className={className}>
      <h2 className="text-center text-3xl font-bold mb-4 mt-32 text-primary-light border-b-2 border-primary-light pb-2">
        POPULAR COURSES
      </h2>
      <p className="text-center text-gray-500 text-sm mb-4">
        Find the best courses tailored for you
      </p>
      <ul
        className={`mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
      >
        {mockCourses?.length > 0 ? (
          mockCourses.map((post: CourseTypeCard) => (
            <CourseCard key={post._id} post={post} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-8">
            No courses found
          </p>
        )}
      </ul>
    </div>
  );
};

export default CourseList;
