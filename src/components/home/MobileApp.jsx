import { Col, Container, Row } from "react-bootstrap";
import "./mobile-app.scss";

export const MobileApp = () => {
  return (
    <div className="mobile-app">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={7} className="text-center text-lg-start">
            <h2>Are you ready to start your online course?</h2>
          </Col>
          <Col lg={5} className="text-center text-lg-end ">
            <a
              className="btn btn-outline-primary me-2"
              href="https://www.apple.com/store"
              target="_blank"
            >
              <i className="pi pi-apple pi-3x"></i> App Store
            </a>

            <a
              className="btn btn-outline-primary"
              href="https://play.google.com/store/apps"
              target="_blank"
            >
              <i className="pi pi-android pi-3x"></i> Play Store
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
