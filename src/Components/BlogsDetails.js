import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function BlogsDetails() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const get = async () => {
      await fetch("https://api.npoint.io/8a39afcfe2ce9c4b1170")
        .then((res) => res.json())
        .then((data) => setBlog(data));
    };
    get();
  }, []);
  const { id } = useParams();

  // Find the project that matches the specified id
  const blogpara = blog.find((item) => {
    return item.id === id;
  });
  // return item.id === Number(id);

  // If the project is not found, return null
  if (!blogpara) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <Container>
      <img src={blogpara.image} alt="" className="blog-image" />
      <p className="p-2 blog-para">{blogpara.paragraphe}</p>
    </Container>
  );
}

export default BlogsDetails;
