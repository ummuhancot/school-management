"use client";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { config } from "@/helpers/config";

const menuItems = Object.entries(config.contact.socialMedia);

export const SocialMenu = (props) => {
  return (
    <Nav {...props}>
      {menuItems.map((item) => (
        <Nav.Link key={item[0]} href={item[1].url} as={Link}>
          <i className={item[1].icon}></i>
          &nbsp;
          {item[0]}
        </Nav.Link>
      ))}
    </Nav>
  );
};
