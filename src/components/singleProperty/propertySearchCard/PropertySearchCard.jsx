import React from "react";
import greenImage from "../../../assets/images/green-bg-picture.jpg";
import { Row,Col } from "react-bootstrap";

const PropertySearchCard = () => {
  return (
    <div className="feature-card p-3">
      <Row>
        <Col lg={6}>
          <div>
            <img src={greenImage} className="picture-card-imd" />
          </div>
        </Col>
        <Col lg={6}>
          <div>
            <img src={greenImage} className="picture-card-imd" />
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-content-between my-3 align-items-center">
        <button className="available-btn" type="button">
          Available
        </button>
        <h2 className="section-head mb-0">$900,000</h2>
      </div>
      <div>
        <h3 className="text-body mb-4">
          McCrory, AR <br /> (Jackson County)
        </h3>
        <h3 className="text-body">
          Size:<span className="feature-text"> 140 acres</span>
        </h3>
        <h3 className="text-body">
          Type:
          <span className="feature-text">
            {" "}
            Farms and Ranches, Recreational Property, Hunting Property
          </span>
        </h3>
      </div>
      <div className="position-relative">
        <h3 className="Refuge-title my-4">Refuge on the Cache</h3>
        <p className="feature-text ">
          +/-137 Acres in Jackson County, Arkansas, near McCrory <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="d-flex justify-content-end">
          <a
            href="#"
            className="py-2 px-4 common-btn shadow-none text-right position-relative z-index99"
          >
            Read More
          </a>
        </div>
        <div className="text-overlay"></div>
      </div>
    </div>
  );
};

export default PropertySearchCard;
