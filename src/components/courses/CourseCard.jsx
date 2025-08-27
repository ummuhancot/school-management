"use client";

import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./course-card.scss";

export const CourseCard = (props) => {

  const { title, user, comment, rating, image } = props;

  return (
    <Card className="course-card">
      <Card.Body>
        <div className="img-container">
          <Image
            src={`/img/courses/${image}`}
            alt={title}
           /*  width={400}
            height={300} */
            
            className="img-fluid rounded"
            fill 
            // koyacaktık eger eşit olmayan fotoğraf olsaydı ve dışına bir div yapıcaktık ve classname ye img-container denicek ve width ve heigth i silmemiz gerekecek.
          />
        </div>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <span>
          <i className="pi pi-users"></i>
          {user}
        </span>
        <span>
          <i className="pi pi-wave-pulse"></i>
          {rating}
        </span>
        <span>
          <i className="pi pi-dollar"></i>
          {comment}
        </span>
      </Card.Footer>
    </Card>
  );
};
