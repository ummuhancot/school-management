"use client";
import Image from "next/image";
import { Card } from "react-bootstrap";
import "./instructor-card.scss";

export const InstructorCard = (props) => {

  const { firstName, lastName, image, title } = props;

  const fullName = firstName + lastName;

  return (
    <Card className="instructor-card">
      <Image
        src={`/img/instructors/${image}`}
        width={400}
        height={500}
        className="card-img-top card-img-bottom img-fluid"
        alt={fullName}
      />

      <Card.Title>
        <h4>{fullName}</h4>
        <h6><i>{title}</i></h6>
      </Card.Title>
    </Card>
  );
};
