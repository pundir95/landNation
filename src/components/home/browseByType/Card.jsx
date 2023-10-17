import React from "react";
import { Row,Col} from "react-bootstrap";
import { homePageData } from "../../../context/HomeProvider";
const Card = ({cardImage,cardTitle,passingId}) => {
  const {browseByCategory}=homePageData()
  return (
    <Col md={4} className="mb-3" style={{cursor:"pointer"}} onClick={()=>browseByCategory(passingId,cardTitle)}>
      <div className="browser-card">
        <img src={cardImage} className="browser-img" />
        <h3 className="browsercard-title">{cardTitle}</h3>
      </div>
    </Col>
  );
};

export default Card;
