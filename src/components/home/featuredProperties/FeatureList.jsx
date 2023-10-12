import React from "react";
import { Col, Row } from "react-bootstrap";
import { FEATURE_LIST } from "../../../constant/home";
import FeatureCard from "./FeatureCard";

const FeatureList = ({list}) => {
  return (
    <div>
      <Row>
        {list?.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <FeatureCard item={item} />
            </React.Fragment>
          );
        })}
      </Row>
    </div>
  );
};

export default FeatureList;
