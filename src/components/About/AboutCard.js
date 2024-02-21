import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fouad Ait Elhaj </span>
            from <span className="purple"> Attaouia, Morroco .</span>
            <br />Data Science and Decision Support Master's graduate with a passion for using data to generate
actionable insights and help businesses make informed decisions. With a strong background in
statistics, programming, and data analysis, I am seeking a job
opportunity where I can put my technical skills to the test and contribute to concrete projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bicycle Ricing
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring  New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "However it looks hard one day you will make it"{" "}
          </p>
          <footer className="blockquote-footer">FouadAE</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
