import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import add from "../../Assets/Projects/add.webp";
import othello from "../../Assets/Projects/othello.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SGCIP-Server"
              description="My project consists in the study, the design and the realization of an application of Integrated Management of the communication of the Province developed using Java JEE "
              ghLink="https://github.com/FouadAE/SGCIP-Client"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SGCIP-Client"
              description="the is the front end of the project in your left."
              ghLink="https://github.com/FouadAE/SGCIP-Client"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Function Draw VR"
              description="a Javascript application helps mathematicians to better see functions with several variables in 3D , build using web VR technologies"
              ghLink="https://github.com/fouadae/Function-draw-vr"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Books Library"
              description="simple web site to store books using the title and description  and the pdf file

              this web site coded using expressJs and ejs"
              ghLink="https://github.com/fouadae/books_lib"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={add}
              isBlog={false}
              title="Universities world ranking Data Analysis"
              description="The objective of this project is to introduce us to the main stages of the production of a data analysis report: from cleaning and importing raw data to their descriptive analysis and graphical presentation."
              ghLink="https://github.com/fouadae/universities-world-ranking-data-analysis"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={othello}
              isBlog={false}
              title="Othello Game"
              description="Othello game is famous game I try in this project to implement it using python and the two algorithms minimax and alpha-beta-pruning algorithm you can play again 3 levels each level depend on search deept"
              ghLink="https://github.com/fouadae/universities-world-ranking-data-analysis"
              demoLink=""
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
