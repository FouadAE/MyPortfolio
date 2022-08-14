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
            <br />I am a junior Full Stack Developer  and Data science & Machine Learning Student in FSTM Marrakech.
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
