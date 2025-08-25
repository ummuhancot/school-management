import { config } from "@/helpers/config";
import Link from "next/link";
import { Container } from "react-bootstrap";
import "./topbar.scss";

export const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <div className="slogan">
          <i className="pi pi-megaphone"></i>
          <span>{config.project.slogan}</span>
        </div>
        
      </Container>
    </div>
  );
};
