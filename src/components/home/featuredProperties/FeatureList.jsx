import React from "react";
import { Col, Row } from "react-bootstrap";
import { FEATURE_LIST } from "../../../constant/home";
import FeatureCard from "./FeatureCard";
import NoDataFound from "../../common/NoDataFound/NoDataFound";

const FeatureList = ({list}) => {
  return (
    <div>
      <Row>
        {list.length>0?list?.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <FeatureCard item={item} />
            </React.Fragment>
          );
        }):
        <NoDataFound/>
        }
      </Row>
    </div>
  );
};

export default FeatureList;
