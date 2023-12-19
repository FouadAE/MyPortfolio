import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiRstudio,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiAmazon,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
