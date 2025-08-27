"use client";

import { Carousel } from "primereact/carousel";
import { EventCard } from "./EventCard";

export const UpcomingEventsCarousel = ({ upcomingEvents }) => {


  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1200px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "768",
      numVisible: 2,
      numScroll: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div className="p-2">
        <EventCard {...item} />
      </div>
    );
  };

  return (
    <Carousel
      value={upcomingEvents}
      numVisible={3}
      numScroll={2}
      itemTemplate={itemTemplate}
      responsiveOptions={responsiveOptions}
    />
  );
};
