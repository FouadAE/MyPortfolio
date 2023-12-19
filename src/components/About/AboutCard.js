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
            <br />I have successfully completed my master's degree in Data Science & Machine Learning from FSTM Marrakech. Currently, I am gaining valuable experience as a Junior Full Stack Developer, focusing on Chrome extension development. My work involves utilizing OpenAI API, Langchain, and vector databases such as Pinecone to enhance the functionality and capabilities of these extensions.
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
