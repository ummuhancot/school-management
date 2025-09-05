import { Col, Container, Row } from "react-bootstrap";
import userMenuData from "@/helpers/data/user-menu.json";
import Link from "next/link";
import { auth } from "@/auth";

export const DashboardNavigation = async () => {
  const session = await auth();
  const role = session?.user?.role;
  const userMenu = userMenuData[role.toLowerCase()];

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {userMenu.map((item) => (
          <Col key={item.link}>
            <Link className="btn btn-outline-primary w-100" href={item.link}>
              {item?.title}
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
