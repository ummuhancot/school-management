"use client";

import Image from "next/image";
import { Card } from "react-bootstrap";
import "./event.card.scss";

export const EventCard = (props) => {

const { title, time, location, image } = props;

  return (
    <Card className="event-card">
      <Card.Body>
        <Image
          src={`/img/events/${image}`}
          alt={title}
          width={500}
          height={320}
          className="img-fluid rounded"
        />
        <Card.Subtitle>
          <span>
            <i className="pi pi-clock"></i>
            {time}
          </span>
          <span>
            <i className="pi pi-map-marker"></i>
            {location}
          </span>
        </Card.Subtitle>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
