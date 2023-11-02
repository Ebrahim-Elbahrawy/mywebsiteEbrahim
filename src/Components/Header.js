import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

function Header() {
  return (
    <div className="header">
      <Container>
        <Nav fill variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link as={Link} to="/" className="Tab-one">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/project" className="Tab-one">
              Project
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/blog" className="Tab-one">
              Blogs
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/experience"
              className="Tab-one text-decoration-none"
            >
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" className="Tab-one">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}

export default Header;
