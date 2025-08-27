import events from "@/helpers/data/events.json";
import { Col, Container, Row } from "react-bootstrap";
import { EventCard } from "../home/EventCard";

export const Events = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xxl={4} className="g-5">
        {events.map((item) => (
          <Col key={item?.id}>
            <EventCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
