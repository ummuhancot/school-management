"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Logo } from "./Logo";
import Image from "next/image";
import { config } from "@/helpers/config";
import { MainMenu } from "./MainMenu";
import { ButtonCallNow } from "./ButtonCallNow";

export const MainMenuBar = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="bg-body-tertiary"
      collapseOnSelect
    >
      <Container>
        <Logo />
        <Navbar.Toggle />
        <Navbar.Offcanvas
          id="main-menu"
          aria-labelledby="main-menu"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="main-menu-title">
              <Image
                src="/img/logos/logo-one-line.png"
                width={253}
                height={29}
                alt={config.project.name}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MainMenu className="justify-content-center flex-grow-1" />
            <ButtonCallNow />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
