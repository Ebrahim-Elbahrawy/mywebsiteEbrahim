import React, { useEffect, useState } from "react";
import ExeperienceData from "./ExperienceData";
import { Row, Col, Container } from "react-bootstrap";
function Experience() {
  const [itemData, setItemData] = useState([]);
  // filter by category
  const filterByCategory = async (cat) => {
    if (cat === "ALL") {
      await fetch("https://api.npoint.io/8895f3d15942a822fc59")
        .then((response) => response.json())
        .then((data) => setItemData(data));
    } else {
      const newArr = itemData.filter((item) => item.category === cat);
      setItemData(newArr);
    }
  };
  // filter button
  const newCat = [...new Set(itemData.map((i) => i.category))];

  useEffect(() => {
    const get = async () => {
      await fetch("https://api.npoint.io/8895f3d15942a822fc59")
        .then((res) => res.json())
        .then((data) => setItemData(data));
    };
    get();
  }, []);
  return (
    <Container className="home ">
      <Row>
        <Col className="d-flex justify-content-center flex-wrap">
          <button className="butt-cat " onClick={() => filterByCategory("ALL")}>
            ALL
          </button>
          {newCat.map((item) => {
            return (
              <button
                className="butt-cat"
                key={item.id}
                onClick={() => filterByCategory(item)}
              >
                {item}
              </button>
            );
          })}
        </Col>
      </Row>
      <ExeperienceData itemData={itemData} />
    </Container>
  );
}

export default Experience;
