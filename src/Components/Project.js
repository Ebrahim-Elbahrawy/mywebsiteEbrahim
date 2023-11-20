import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
function Project({ projectInfo }) {
  return (
    <div className="project-page">
      {projectInfo ? (
        projectInfo.map((item) => (
          <Row key={item.id}>
            <Col className="project">
              <img src={item.thumbnall} alt="" className="project__image " />
              <div className="project__overlay d-flex flex-column  align-items-center justify-content-center">
                <h3>{item.title}</h3>
                <h4>Tools </h4>
                <p>{`(${item.package.join(")-(")})`}</p>
                <div className="d-flex justify-content-arround ">
                  <Link
                    to={item.vidiolink}
                    title="go to vidio demo in youtube"
                    className="button__link"
                    target="_blank"  // Use target="_blank" to open the link in a new tab/window
                    rel="noopener noreferrer" // Add these attributes for security when using target="_blank"
                  >
                    {" "}
                    demo YouTube
                  </Link>
                  <Link
                    to={`/project/${item.id}`}
                    title="go to vidio demo in youtube"
                    className="button__link"
                  >
                    {" "}
                    more Details
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        ))
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default Project;
