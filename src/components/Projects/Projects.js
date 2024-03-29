import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/fraud.jpg";
import chatify from "../../Assets/Projects/autofill.png";
import add from "../../Assets/Projects/add.webp";
import othello from "../../Assets/Projects/chatbot.png";
import arabic from "../../Assets/Projects/arabic.jpg";
import analysis from "../../Assets/Projects/analysis.jpg";

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
              title="Chatbot"
              description="A chatbot designed specifically for Jamea El Fenna in Marrakech, Morocco, has the capability to provide information about the location, its history, and administrative details related to the city. Users can inquire about various aspects of Jamea El Fenna and seek assistance on matters concerning the city's administration."
              ghLink="https://github.com/fouadae/chatbot-python-code"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Resume Autofill Chrome Extension"
              description="My Chrome extension simplifies job applications on River and Greenhouse websites by automating the form-filling process. Developed with JavaScript, it extracts and populates fields, while the OpenAI API automates data extraction from resumes to match application fields."
              ghLink="https://github.com/mamasdev/underpin-extension"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analysis}
              isBlog={false}
              title="Market Job Offers Data Analysis"
              description="This project aims to empower users by providing insights into the job market for AI, Data Science, and Big Data. Users will gain a comprehensive understanding of in-demand skills and the associated salary trends, facilitating informed decisions for career planning and development. The goal is to offer a valuable resource for individuals seeking to optimize their career paths in these dynamic and high-demand fields."
              ghLink="https://github.com/FouadAE/jobs-trend-analysis"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
