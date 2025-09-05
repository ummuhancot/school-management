import { Spacer } from "@/components/common/spacer/Spacer";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <div>
      <Spacer />
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image
              src="/img/errors/error.png"
              width={500}
              height={500}
              alt="error image"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h2>Page Not Found</h2>
            <p>
              The requested page could not be found on our server. We apologize
              for any inconvenience. Please check the URL for errors or return
              to the homepage. If you believe this is an error, kindly contact
              our support team for assistance. Thank you for your understanding.
            </p>
          </Col>
        </Row>
      </Container>
      <Spacer />
    </div>
  );
}
