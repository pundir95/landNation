import React, { useState } from "react";
import "../../../assets/style.css";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./schema";
import logoImg from "../../../assets/images/LandNation-dark.svg";
import loginImg from "../../../assets/images/hero-section2.png";
import { agentRegister } from "../../../store/slices/authDataSlice";
import Loader from "../../../components/common/spinner";
import { Link, useNavigate } from "react-router-dom";
import AgentOtp from "../agentOtp/agentOtp";

const AgentSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isVerificationOfOtp, setVerificationOtp] = useState(false);

  const { loading } = useSelector((state) => state.authData);

  const onSubmit = (values) => {
    const data = {
      email: values.email,
      username: values.userName,
      first_name: values.firstName,
      last_name: values.lastName,
      password: values.password,
      confirm_password: values.confirmPassword,
    };
    dispatch(
      agentRegister(data, () => {
        // navigate("/sign-in");
        setVerificationOtp(true);
      })
    );
  };
  return (
    <>
      {isVerificationOfOtp ? (
        <section className="auth-section py-lg-5 py-4">
          <Container>
            <div className="inner-auth">
              <Row>
                <Col lg={6}>
                  <div className="auth-content d-flex justify-content-between flex-column h-100">
                    <div>
                      <Link to="/">
                        <img src={logoImg} className="login-logo mb-5" />
                      </Link>
                      <h2 className="text-center auth-heading">Sign Up</h2>
                      <p className="text-center auth-text mb-4">
                        Let's get Started
                      </p>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                      >
                        <Form>
                          <Row>
                            <Col md={6}>
                              <Field
                                type="text"
                                name="firstName"
                                placeholder="Enter First Name"
                                className="form-control auth-field shadow-none mb-3"
                              />
                              <ErrorMessage
                                name="firstName"
                                component="p"
                                className="errorMessage"
                              />
                            </Col>
                            <Col md={6}>
                              <Field
                                type="text"
                                name="lastName"
                                placeholder="Enter Last Name"
                                className="form-control auth-field shadow-none mb-3"
                              />
                              <ErrorMessage
                                name="lastName"
                                component="p"
                                className="errorMessage"
                              />
                            </Col>
                          </Row>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            className="form-control auth-field shadow-none mb-3"
                          />
                          <ErrorMessage
                            name="email"
                            component="p"
                            className="errorMessage"
                          />

                          <Field
                            type="text"
                            name="userName"
                            placeholder="Enter Username"
                            className="form-control auth-field shadow-none mb-3"
                          />
                          <ErrorMessage
                            name="userName"
                            component="p"
                            className="errorMessage"
                          />

                          <Field
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="form-control auth-field shadow-none mb-4"
                          />
                          <ErrorMessage
                            name="password"
                            component="p"
                            className="errorMessage"
                          />
                          <Field
                            type="password"
                            name="confirmPassword"
                            placeholder="Enter Confirm Password"
                            className="form-control auth-field shadow-none mb-4"
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            component="p"
                            className="errorMessage"
                          />
                          <button type="submit" className="auth-btn">
                            {loading ? <Loader /> : `Sign Up`}
                          </button>
                        </Form>
                      </Formik>
                    </div>
                    <div className="text-center mt-3">
                      <Link to="/sign-in" className="auth-link">
                        Already have Account? <span>Login</span>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="d-lg-block d-none">
                  <div className="auth-img h-100">
                    <img src={loginImg} />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      ) : (
        <AgentOtp />
      )}
    </>
  );
};

export default AgentSignIn;
