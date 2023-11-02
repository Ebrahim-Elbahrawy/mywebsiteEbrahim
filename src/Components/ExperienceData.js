import React from "react";
import { Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
function ExperienceData({ itemData }) {
  return (
    <Row className=" d-flex justify-content-end my-4 ">
      {itemData.length >= 1 ? (
        itemData.map((item) => (
          <Col
            key={item.id}
            className=" div-item d-flex flex-column align-items-center"
          >
            <div className="w-100">{item.title}</div>
            <img
              src={item.image}
              alt="notFOUND"
              className="image-skills h-75 "
            />
          </Col>
        ))
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Row>
  );
}

export default ExperienceData;
