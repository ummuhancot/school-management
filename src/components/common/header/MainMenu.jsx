"use client";

import Nav from "react-bootstrap/Nav";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";

export const MainMenu = (props) => {
  return (
    <Nav {...props}>
      {menuItems.map((item) => (
        <Nav.Link key={item.link} href={item?.link} as={Link}>
          <i className={item?.icon}></i>
          &nbsp;
          {item?.title}
        </Nav.Link>
      ))}
    </Nav>
  );
};
