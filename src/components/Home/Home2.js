import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/FOUAD.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Allow Me <span className="purple"> TO NTRODUCE MYSELF </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am deeply passionate about the field of Data Science and Machine Learning, and have gained a significant amount of knowledge and experience in these areas … 🤷‍♂️
              <br />
              <br />I am proficient in techniques such as
              <i>
                <b className="purple"> Machine Learning , Deep Learning  and programming in  Python. </b>
              </i>
              <br />
              <br />
              My interests lie in developing new &nbsp;
              <i>
                <b className="purple">Machien Learning Models  </b> as
                 well as{" "}
                <b className="purple">
                 exploring the intersection of Machine Learning and web development.
                </b>
              </i>
              <br />
              <br />
              I am constantly seeking opportunities to apply my skills, particularly in the use of <b className="purple">Python</b> and
              <i>
                <b className="purple">
                  {" "}
                  popular Machine Learning libraries 
                </b>
              </i>
              {/* &nbsp; such as
              <i>
                <b className="purple"> Scikit-learn </b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fouadae"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/elhajfouad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fouadae/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fouad_ae_49/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
