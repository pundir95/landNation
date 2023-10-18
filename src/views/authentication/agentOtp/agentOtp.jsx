import React, { Component, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../assets/style.css";
import logoImg from "../../../assets/images/LandNation-dark.svg";
import loginImg from "../../../assets/images/hero-section2.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";

const AgentOtp = () => {
  const [otp, setOtpValue] = useState("");

  const handleOtpInputChange = (otp) => {
    if (isNaN(otp)) return;
    setOtpValue(otp);
  };

  const verifyOtpButton=()=>{
    
  }
  return (
    <>
      <section className="auth-section py-lg-5 py-4">
        <Container>
          <div className="inner-auth">
            <Row>
              <Col lg={6}>
                <div className="auth-content d-flex justify-content-between flex-column h-100">
                  <div>
                    <Link to="/">
                      <img
                        src={logoImg}
                        className="login-logo mb-5"
                        alt="Logo"
                      />
                    </Link>
                    <h2 className="text-center auth-heading">Verify Otp</h2>
                    <OTPInput
                      value={otp}
                      onChange={handleOtpInputChange}
                      numInputs={5}
                      renderInput={(props) => (
                        <input
                          {...props}
                          placeholder="-"
                          className="otpInput"
                        />
                      )}
                      isInputNum={true}
                      containerStyle="OTPInputContainer"
                    />
                  </div>
                  <button type="submit" className="auth-btn" onClick={verifyOtpButton}>
                    Verify
                          </button>
                  <div className="text-center mt-3">
                    <Link to="/sign-up" className="auth-link">
                      Resend Otp
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="d-lg-block d-none">
                <div className="auth-img h-100">
                  <img src={loginImg} alt="Login Image" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AgentOtp;
