import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={leaf}
              isBlog={false}
              title="Fire detection System"
              description="Used the fire detection dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with  classes of various Fire images. The model was successfully able to detect the fire in various cases. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/bantubhaskar/AI-Powered-Fire-Detection-and-Control-System-Using-CNN-and-Arduino"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Outfit Suggestion System "
              description="Developed a mobile application using Flutter to suggest outfits based on the occasion (e.g., college, 
meetings, parties). Integrated user authentication and a database to manage the user's clothing collection. 
Utilized AI algorithms for generating outfit recommendations, enhancing the user experience for those 
seeking fashion advice."
              ghLink="#######"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Criminal Detection System "
              description="Developed a facial recognition system using a CNN model to identify criminals in surveillance footage. 
Implemented the system with Python and TensorFlow, focusing on image processing and real-time 
detection. Improved accuracy and efficiency in recognizing faces, contributing to enhanced security 
measures. "
              ghLink="https://github.com/bantubhaskar/Real-Time-Thief-Detection-System-Using-CNN-and-CCTV-Surveillance"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
