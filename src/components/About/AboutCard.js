import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bantu Bhaskar </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently Student in Vjit and a software developer.
            <br />
            I have Startup called as Vijaya_Sarthi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Farming
            </li>
            <li className="about-activity">
              <ImPointRight /> driving the Trackter
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bantu Bhaskar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
