import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const endpoint = "https://formspree.io/f/xeqwnjwq";
    const options = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch(endpoint, options);
    if (res.ok) {
      setFormSubmitted(true);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setFormSubmitted(false);
  };

  return (
    <Container className="home d-flex justify-content-center ">
      {formSubmitted ? (
        <div>
          <h2>thank you for massage</h2>
          <Button onClick={resetForm} className="btnsend ">
            {" "}
            send another massage{" "}
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit} className="w-75 ">
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Your Massage:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
              placeholder="send your massage here"
            />
          </Form.Group>
          <Button type="submit" className="btnsend  ">
            Send Your Massage
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default ContactForm;
