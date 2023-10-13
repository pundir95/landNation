import React from "react";
import { Col } from "react-bootstrap";
import { homePageData } from "../../../context/HomeProvider";

const FeatureCard = ({item}) => {
  const {handleSelectedPropertyCard}=homePageData()
  let baseURL=import.meta.env.VITE_BASE_URL
  return (
    <Col md={6} className="mb-3" onClick={()=>handleSelectedPropertyCard(item.id)}>
      <div className="feature-card p-3">
        <div className="feature-imgbx position-relative mb-3">
          <img src={baseURL+item?.media[0]?.thumbnail} className="feature-img" />
          <span className="acres-length">160 Acres</span>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h3 className="feature-title mb-0">{item.price_per_acre}</h3>
            <p className="feature-text">
             {`${item.city},${item.country}`}
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
