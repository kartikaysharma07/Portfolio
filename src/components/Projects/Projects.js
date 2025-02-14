import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import p1d from "../../Assets/Projects/p1d.png";
import p2d from "../../Assets/Projects/p2d.png";
import p3 from "../../Assets/Projects/p3.webp";
import p4 from "../../Assets/Projects/p4.png";
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
              imgPath={p1d}
              isBlog={false}
              title="AirBnB Clone"
              description="Book a room or plan a trip using Airbnb anywhere anytime. "
              ghLink="https://github.com/kartikaysharma07/Airbnb-Clone"
              demoLink="https://airbnb-clone-1-eptg.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2d}
              isBlog={false}
              title="Social Media Website"
              description="Share and see photos and videos with friends in chitrgram. Chat with friends and share whats in your heart."
              ghLink="https://github.com/kartikaysharma07/Social-Media-App"
              demoLink="https://social-media-app-lk5n.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title="E-commerce Website"
              description="Incredible e-commerce webshop with an Admin Dashboard and CMS using Next Stripe TypeScript and Payload CMS."
              ghLink="https://github.com/kartikaysharma07/e-commerce"
              demoLink="https://editor.souma-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4}
              isBlog={false}
              title="Portfolio"
              description="Portfolio Website using Framer Motion and 3d Effects, and Showcasing My Skills and Learnings through this Portfolio "
              ghLink="https://github.com/soumyajit4419/Plant_A"
              demoLink="https://portfolio-9x79.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
