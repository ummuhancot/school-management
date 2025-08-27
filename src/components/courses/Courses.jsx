import courses from "@/helpers/data/courses.json";
import { Col, Container, Row } from "react-bootstrap";
import { CourseCard } from "./CourseCard";

export const Courses = ({ featured }) => {
    
    let filteredCourses = featured ? courses.filter((course) => course.featured): courses;

    
    // ? ikinci yol bu
/*   
? let filteredCourses = courses; */

 /* 
 ? if (featured) {
 ?   filteredCourses = courses.filter((item) => item.featured);
  } */

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xxl={4} className="g-5">
        {filteredCourses.map((item) => (
          <Col key={item?.id}>
            <CourseCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
