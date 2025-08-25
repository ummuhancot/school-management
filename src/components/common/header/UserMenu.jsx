"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ButtonLogout } from "./ButtonLogout";

export const UserMenu = ({ session, userMenu }) => {
  const [show, setShow] = useState(false);

  const router = useRouter();

  const { name } = session?.user;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavigate = (link) => {
    setShow(false);
    router.push(link);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="pi pi-user"> {name} </i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <i className="pi pi-user"> {name} </i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {userMenu.map((item) => (
              <Button
                key={item.title}
                className="nav-link btn btn-light text-start"
                onClick={() => handleNavigate(item.link)}
              >
                {item.title}
              </Button>
            ))}
            <ButtonLogout setShow={setShow} />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
