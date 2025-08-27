import { SectionTitle } from "../common/section-title/SectionTitle";
import { Courses } from "../courses/Courses";

export const FeaturedCourses = () => {
  return (
    <div className="featured-courses bg content-section">
      <SectionTitle>Featured Courses</SectionTitle>
      <Courses featured={true} />
    </div>
  );
};
