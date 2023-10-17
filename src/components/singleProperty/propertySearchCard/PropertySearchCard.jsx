import React, { useEffect } from "react";
import greenImage from "../../../assets/images/green-bg-picture.jpg";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSinglePropertyDetails } from "../../../store/slices/homeDataSlice";
import { BASE_URL } from "../../../utils/utility";

const PropertySearchCard = ({ singlePropertyDetailsData, loading }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  let id = location.pathname.split("/")[2];
  useEffect(() => {
    if (id) {
      dispatch(getSinglePropertyDetails(id));
    }
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading..........</p>
      ) : (
        <div className="feature-card p-3">
          <Row>
            <Col lg={6}>
              <div>
                <img
                  src={singlePropertyDetailsData?.media?.length>0 && BASE_URL+singlePropertyDetailsData?.media[0]?.media}
                  className="picture-card-imd"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div>
              <img
                  src={singlePropertyDetailsData?.media?.length>0 && BASE_URL+singlePropertyDetailsData?.media[1]?.media}
                className="picture-card-imd" />
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-between my-3 align-items-center">
            <button className="available-btn" type="button">
              Available
            </button>
            <h2 className="section-head mb-0">
              ${singlePropertyDetailsData?.price_per_acre}
            </h2>
          </div>
          <div>
            <h3 className="text-body mb-4">
              {singlePropertyDetailsData?.user_profile?.username} <br /> {`${singlePropertyDetailsData?.city}, ${singlePropertyDetailsData?.country}`}
            </h3>
            <h3 className="text-body">
              Size:<span className="feature-text">{singlePropertyDetailsData?.acres}</span>
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
             {singlePropertyDetailsData?.listing_description}
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
      )}
    </>
  );
};

export default PropertySearchCard;
