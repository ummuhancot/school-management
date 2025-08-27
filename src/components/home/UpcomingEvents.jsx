import { Container } from "react-bootstrap";
import { SectionTitle } from "../common/section-title/SectionTitle";
import events from "@/helpers/data/events.json";
import { UpcomingEventsCarousel } from "./UpcomingEventsCarousel";

export const UpcomingEvents = () => {

    //* tarihe göre alıyor burda objeleri
  const upcomingEvents = events.filter(
    (event) => new Date(`${event.date} ${event.time}`) > new Date()
  );

  return (
    <Container>
      <SectionTitle>Upcoming Events</SectionTitle>
      <UpcomingEventsCarousel 
      upcomingEvents={upcomingEvents} />
    </Container>
  );
};
