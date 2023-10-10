import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../assets/style.css";
import logoImg from "../../../assets/images/LandNation-dark.svg";
import loginImg from "../../../assets/images/hero-section2.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialValues, validationSchema } from "./schema";
import { agentLogin } from "../../../store/slices/authDataSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/common/spinner";
import { Link } from "react-router-dom";

const AgentSignIn = () => {
  const { loading } = useSelector((state) => state.authData);
  const dispatch=useDispatch()
  const onSubmit = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    dispatch(agentLogin(data));
    window.location.href="/dashboard-home"
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
                    <img src={logoImg} className="login-logo mb-5" />
                    <h2 className="text-center auth-heading">Login</h2>
                    <p className="text-center auth-text mb-4">
                      Let's get Started
                    </p>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      <Form>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter Email"
                          className="form-control auth-field shadow-none mb-3"
                        />
                        <ErrorMessage name="email" component="p" />

                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                          className="form-control auth-field shadow-none mb-4"
                        />
                        <ErrorMessage name="password" component="p" />
                        <button className="auth-btn">{loading?<Loader/>:'Login'}</button>
                      </Form>
                    </Formik>
                  </div>
                  <div className="text-center mt-3">
                    <Link to="/sign-up" className="auth-link">
                      Don't have Account? <span>Sign Up</span>
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
    </>
  );
};

export default AgentSignIn;
