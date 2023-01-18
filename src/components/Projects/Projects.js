import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/fraud.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/sgcip.PNG";
import add from "../../Assets/Projects/add.webp";
import othello from "../../Assets/Projects/othello.jpg";
import arabic from "../../Assets/Projects/arabic.jpg";

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
              imgPath={arabic}
              isBlog={false}
              title="K-means-Random-Forest-Arabic-Handwriting-Letters-Recognition"
              description="I applied both supervised and unsupervised models to recognize and classify Arabic Handwriting letters using a small dataset created in our classroom for this project"
              ghLink="https://github.com/FouadAE/K-means-Random-Forest-Arabic-Letters"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SGCIP"
              description="My project consists in the study, the design and the realization of an application of Integrated Management of the communication of the Province developed using Java JEE "
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
              title="Fraud-Detection-Data-Mining"
              description="A fraud detection system for final exams using machine learning and data mining techniques to identify patterns in student data and detect suspicious behavior, ensuring the integrity of exam scores and fair evaluation of student performance"
              ghLink="https://github.com/FouadAE/Fraud-Detection-Data-Mining"
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
