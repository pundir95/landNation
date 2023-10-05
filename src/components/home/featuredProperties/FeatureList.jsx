import React from "react";
import { Col, Row } from "react-bootstrap";
import { FEATURE_LIST } from "../../../constant/home";
import FeatureCard from "./FeatureCard";

const FeatureList = () => {
  return (
    <div>
      <Row>
        {FEATURE_LIST.map((item, index) => {
          return (
            <>
              <FeatureCard item={item} />
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default FeatureList;
