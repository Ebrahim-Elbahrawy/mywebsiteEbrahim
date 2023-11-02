import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProjectDetails({ projectInfo }) {
  const { id } = useParams();

  // Find the project that matches the specified id
  const project = projectInfo.find((item) => item.id === Number(id));

  // If the project is not found, return null
  if (!project) {
    return null;
  }

  return (
    <div className="project-page">
      <Container>
        <Row className="slider_image_details d-flex justify-content-center align-items-center">
          <Col sm="8">
            <img
              src={project.thumbnall}
              className="w-100 project_details_image"
              alt="not found"
            />
          </Col>
          <Col sm="4 d-flex justify-content-center align-items-center flex-column">
            <h2 className="title_project">{project.title}</h2>
            <h3 className="title_project">Description</h3>
            <p dir="rtl" className="title_project">
              {project.describtion}
            </p>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center flex-column">
          {project.image.map((item, index) =>
            item ? (
              <img
                className="project-image-details w-100"
                src={item}
                alt="not found"
                key={index}
              />
            ) : null
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ProjectDetails;
