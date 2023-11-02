import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";
function Blogs() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const get = async () => {
      await fetch("https://api.npoint.io/8a39afcfe2ce9c4b1170")
        .then((res) => res.json())
        .then((data) => setBlog(data));
    };
    get();
  }, []);

  return (
    <div>
      <Container className="home">
        <Row className="pt-2">
          {blog ? (
            blog.map((item) => {
              return (
                <Col
                  key={item.id}
                  className=" pt-4 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center flex-column sss"
                >
                  <Link to={item.id} style={{ textDecoration: "none" }}>
                    <div>
                      {item.image ? (
                        <img
                          src={item.image}
                          alt="not found"
                          className="blog-image"
                        />
                      ) : null}
                    </div>
                    <div>
                      <h3 className="blog-title">{item.title}</h3>
                      <h4 className="blog-title d-flex justify-content-center align-items-center">
                        {" "}
                        <FontAwesomeIcon
                          icon={faClock}
                          className="theme_change2 pe-2"
                        />
                        {item.date}
                      </h4>
                    </div>
                  </Link>
                </Col>
              );
            })
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Blogs;
