import { Col, Container, Row } from "react-bootstrap";
import { Logo } from "../header/Logo";
import { config } from "@/helpers/config";
import { MainMenu } from "../header/MainMenu";
import { SocialMenu } from "./SocialMenu";
import { ContactMenu } from "./ContactMenu";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-4">
          <Col xs={12}>
            <Logo theme="light" />
            <p className="mt-3">{config.project.description}</p>
          </Col>

          <Col xs={6} xl={4}>
            <h3>Links</h3>
            <MainMenu />
          </Col>

          <Col xs={6} xl={4}>
            <h3>Social</h3>
            <SocialMenu />
          </Col>

          <Col xl={4}>
            <h3>Contact</h3>
            <ContactMenu />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
