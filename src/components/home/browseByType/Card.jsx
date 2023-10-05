import React from "react";
import { Row,Col} from "react-bootstrap";
const Card = ({cardImage,cardTitle}) => {
  return (
    <Col md={4} className="mb-3">
      <div className="browser-card">
        <img src={cardImage} className="browser-img" />
        <h3 className="browsercard-title">{cardTitle}</h3>
      </div>
    </Col>
  );
};

export default Card;
