import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";
import { BROWSER_LIST } from "../../../constant/home";
const CategoryList = () => {
  return (
    <div>
      <Row className="justify-content-center">
        {BROWSER_LIST?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Card cardImage={item.image} cardTitle={item.title} passingId={item.passingId} />
            </React.Fragment>
          );
        })}
      </Row>
    </div>
  );
};

export default CategoryList;
