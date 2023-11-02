import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Home from "./Components/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IconLink from "./Components/IconLink";
import ContactForm from "./Components/ContactForm";
import Experience from "./Components/Experience";
import Project from "./Components/Project";

// import Canvas from "./Components/Canvas";

import { useState, useEffect } from "react";
// import CircularCursor from "./Components/CircularCursor";
import ProjectDetails from "./Components/ProjectDetails";
import Blogs from "./Components/Blogs";
import BlogsDetails from "./Components/BlogsDetails";
import IconSection from './Components/IconSection';

function App() {
  const [projectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    const get = async () => {
      await fetch("https://api.npoint.io/b27b6018b8ca727e199c")
        .then((res) => res.json())
        .then((data) => setProjectInfo(data));
    };
    get();
  }, []);
  return (
    <div className="App ">
      <BrowserRouter>
        <Header />
        <IconLink />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/experience"
            element={
              <>
                <Experience />
              </>
            }
          />
          <Route
            path="/project"
            element={<Project projectInfo={projectInfo} />}
          />
          <Route
            path="/project/:id"
            element={<ProjectDetails projectInfo={projectInfo} />}
          />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogsDetails />} />
        </Routes>
        <IconSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
