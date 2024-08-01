import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHome,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";

function Home() {
  const fileId = '1SPbrPfryWTFKCPoy7FLtbkZmoLi-g5rB';
  const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const fileName = 'EbrahimElbahrawyResume.pdf';
  const [info, setInfo] = useState({});
  useEffect(() => {
    const get = async () => {
      await fetch("https://api.npoint.io/ffa4df4bd05b7beaf0ad")
        .then((res) => res.json())
        .then((data) => setInfo(data));
    };
    get();
  }, []);
  return (
    <Container className=" home">
      {info ? (
        <Row className=" justify-content-center align-items-center">
          <Col className="d-flex justify-content-center ">
            <figure className="d-flex justify-content-center">
              <img src={info.imgSrc} alt="" className="img" />
            </figure>
          </Col>
          <Col>
          <Col className="d-flex justify-content-between ">
            <h3 className="welcome">Welcome</h3>
            <a href={fileUrl} download={fileName}>
            <button  className="button__link ">Download CV</button>
    </a>
    </Col>
            <h2>
              <span> I am / </span>
              {info.name}
            </h2>
            <p>
              <FontAwesomeIcon icon={faGraduationCap} /> {info.profession}
            </p>
            <p>
              <FontAwesomeIcon icon={faGraduationCap} /> {info.degree}
            </p>
            <p>
              <FontAwesomeIcon icon={faHome} /> {info.address}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              {info.phone}
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> {info.email}
            </p>
            <hr />
            <p>{info.about}</p>
            <hr />
          </Col>
        </Row>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Container>
  );
}

export default Home;
