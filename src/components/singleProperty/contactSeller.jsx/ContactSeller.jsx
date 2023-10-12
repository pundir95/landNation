import React from "react";
import CustomButton from "../../common/filterButton/CustomButton";
import userProfileImg from "../../../assets/images/user-profile.png";

const ContactSeller = () => {
  return (
    <>
      <div className="mb-39">
        <h3 className="common-sub-heading mb-1">Amenities</h3>
        <p className="feature-text">Agriculture and Farming</p>
      </div>
      <div className="mb-5">
        <h3 className="common-sub-heading mb-1">Directions</h3>
        <p className="feature-text">
          Contact us for directions to this property
        </p>
      </div>
      <div className="mb-3">
        <h3 className="common-sub-heading mb-1">Contact Seller</h3>
        <div className="d-flex align-items-center mt-3 mb-4">
          <img src={userProfileImg} className="me-3 user-feature-img" />
          <div className="">
            <h3 className="userfeature-title">Tom Richerson</h3>
            <p className="userfeature-text">usalandsales.com</p>
            <p className="feature-text text-decoration-underline text-dark mt-3">
              View Phone Number
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1 mb-1"
            className="form-label text-body"
          >
            Name
          </label>
          <input
            type="email"
            className="form-control seller-input border-0"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1 mb-1"
            className="form-label text-body"
          >
            Your Phone Number
          </label>
          <input
            type="email"
            className="form-control seller-input border-0"
            id="exampleFormControlInput1"
            placeholder="+1 (234) 567-8900"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1 mb-1"
            className="form-label text-body"
          >
            Your Email Address
          </label>
          <input
            type="email"
            className="form-control seller-input border-0"
            id="exampleFormControlInput1"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1 mb-1"
            className="form-label text-body"
          >
            Are you a licensed real estate agent or broker?
          </label>
          <textarea
            type="email"
            className="form-control seller-input seller-text-area border-0"
            id="exampleFormControlInput1"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label feature-text"
            for="flexCheckDefault"
          >
            Yes, I’d like to periodically receive information about the land
            market.
          </label>
        </div>
        <CustomButton customClass="common-btn w-100 d-block mb-3 py-2 border-0 mt-4">
          Contact Seller
        </CustomButton>
        <p className="text-center mb-5 text-body color-828282">
          By clicking the button, you agree to our Terms of Use and Privacy
          Policy.
        </p>
      </div>
    </>
  );
};

export default ContactSeller;
