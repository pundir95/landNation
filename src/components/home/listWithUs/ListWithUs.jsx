import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { homePageData } from "../../../context/HomeProvider";
const ListWithUs = () => {
  const { searchValue } = homePageData();
  return (
    <>
      {searchValue.length == 0 ? (
        <>
          {" "}
          <section className="why-section">
            <Container>
              <div className="inner-why">
                <Row className="justify-content-center">
                  <Col md={11}>
                    <h3 className="section-head text-white mb-4">
                      Why list with Us
                    </h3>
                    <p className="why-text mb-5">
                      Maximize your property's exposure! Whether you're a
                      realtor or an owner, LandNation brings you closer to the
                      right buyers. List today for better leads and results.
                    </p>
                    <div className="why-card py-4 px-md-5 px-4 mb-4">
                      <Row className="align-items-center">
                        <Col md={6}>
                          <div>
                            <h3 className="why-card-title mb-md-0">
                              LandNation Group
                            </h3>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <p className="why-card-text mb-0">
                              Connecting professionals and owners with buyers
                              and investors from around the world
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="why-card py-4 px-md-5 px-4 mb-4">
                      <Row className="align-items-center">
                        <Col md={6}>
                          <div>
                            <h3 className="why-card-title mb-md-0">
                              5 Countries
                            </h3>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <p className="why-card-text mb-0">
                              We are at the heart of the global rural property
                              scene, covering markets in the USA, Canada, U.K.
                              Ireland and Australia
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="why-card py-4 px-md-5 px-4 mb-4">
                      <Row className="align-items-center">
                        <Col md={6}>
                          <div>
                            <h3 className="why-card-title mb-md-0">
                              Dashboard
                            </h3>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div>
                            <p className="why-card-text mb-0">
                              Our dashboard is a gateway to market data and
                              insights that positions you to optimize strategies
                              and maximize returns.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
          <section className="list-section">
            <Container>
              <div className="inner-list">
                <Row className="justify-content-center">
                  <Col md={8}>
                    <div className="text-center">
                      <h2 className="section-head text-white mb-4">
                        List your property on the LandNation Group Websites
                      </h2>
                      <a
                        href="#"
                        className="py-2 px-4 bg-white d-inline-block white-btn common-btn shadow-none"
                      >
                        Contact
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ListWithUs;
