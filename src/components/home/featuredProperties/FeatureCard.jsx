import React from "react";
import { Col } from "react-bootstrap";

const FeatureCard = ({item}) => {
  return (
    <Col md={6} className="mb-3">
      <div className="feature-card p-3">
        <div className="feature-imgbx position-relative mb-3">
          <img src={item.image} className="feature-img" />
          <span className="acres-length">160 Acres</span>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h3 className="feature-title mb-0">{item.price}</h3>
            <p className="feature-text">
             {item.text}
            </p>
          </div>
          <div>
            <button className="fav-btn btn shadow-none">
              <img src={item.favImg} />
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={item.userImage} className="me-3 user-feature" />
            <div className="">
              <h3 className="userfeature-title">Tom Richerson</h3>
              <p className="userfeature-text">usalandsales.com</p>
            </div>
          </div>
          <a href="#" className="py-2 px-4 common-btn shadow-none">
            Contact
          </a>
        </div>
      </div>
    </Col>
  );
};

export default FeatureCard;
