import React, { Component, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../assets/style.css";
import logoImg from "../../../assets/images/LandNation-dark.svg";
import loginImg from "../../../assets/images/hero-section2.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

const DigitInput = ({ values, onChange, onBackspace }) => {
    return (
      <div className="digit-group">
        {values.map((value, index) => (
          <Field
            key={index}
            type="text"
            maxLength="1"
            name={`digit-${index + 1}`}
            value={value}
            onChange={onChange}
            onKeyDown={(e) => onBackspace(e, index)}
          />
        ))}
      </div>
    );
  };
  



const AgentOtp = () => {
  const [digitValues, setDigitValues] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const newValues = [...digitValues];
    newValues[index] = e.target.value;
    setDigitValues(newValues);
  };

  const handleBackspace = (e, index) => {
    if (e.keyCode === 8 && index > 0) {
      const newValues = [...digitValues];
      newValues[index - 1] = '';
      setDigitValues(newValues);
    }
  };

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
                      <img src={logoImg} className="login-logo mb-5" alt="Logo" />
                    </Link>
                    <h2 className="text-center auth-heading">Verify Otp</h2>
                    <p className="text-center auth-text mb-4">
                      We will send a one-time password to your email address
                    </p>
                    <Formik>
                      <Form>
                        <DigitInput
                          values={digitValues}
                          onChange={(e) => handleChange(e, 0)}
                          onBackspace={(e) => handleBackspace(e, 0)}
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="errorMessage"
                        />
                        <ErrorMessage
                          name="password"
                          component="p"
                          className="errorMessage"
                        />
                        <button className="auth-btn" type="submit">
                          Verify
                        </button>
                      </Form>
                    </Formik>
                  </div>
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
