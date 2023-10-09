import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../../assets/style.css';
import yesIcon from '../../assets/images/yes-icon.png';

const PriceList = () => {
  return (
    <>
        <section className="">
            <Container>
                <div className="hero2-heading">
                    <h1 className="text-center font38 mb-4 fw-semibold">LandNation provides the most exposure for you and your rural listings</h1>
                    <p className="feature-text text-center">12+ million visits per month, 25X25X the next largest land site and
                        the most results on the 1st page of Google for land1st page of Google for land</p>
                        <div className="d-flex justify-content-center mt-5 align-items-center">
                            <h3 className="common-sub-heading mb-1 popular-btn mb-3">Most Popular</h3>
                        </div>
                </div>
            </Container>
        </section>
        <section className="plan-cards">
            <Container>
                <Row>
                    <Col md={4} className='mb-3'>
                        <div className="feature-card p-3 d-flex justify-content-between flex-column h-100">
                            <div>
                                <button type="button" className="plan-cards-btn mb-3">Standard</button>
                                <h3 className="text-body mb-1">Economical</h3>
                                <h3 className="text-body mb-1">Exposure with essential</h3>
                                <h3 className="text-body mb-1">advertising needs</h3>
                                <h2 className="price-month my-3">$9.99/mo</h2>
                                <h3 className="userfeature-title text-center listine-btn-border my-3">5 Listings</h3>
                                <div className="">
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Elevated placement in search results </h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Enhanced branding on your listing page Competition-free listings (no other agents or listings displayed with your listing) </h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Add unlimited photos </h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Include a video</h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Create and attach a custom property map </h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Receive real-time leads by text and email </h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Include your information in the broker and agent directory</h3>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="py-2 px-4 common-btn shadow-none d-block text-right w-100 text-center">Select Plan</a>
                        </div>
                    </Col>
                    <Col md={4} className='mb-3'>
                        <div className="feature-card p-3 d-flex justify-content-between flex-column h-100">
                            <div>
                                <button type="button" className="plan-cards-btn mb-3">Premium</button>
                                <h3 className="text-body mb-1">60% more exposure than</h3>
                                <h3 className="text-body mb-1">Standard and branding to</h3>
                                <h3 className="text-body mb-1">grow</h3>
                                <h2 className="price-month my-3">$19.99/mo</h2>
                                <h3 className="userfeature-title text-center listine-btn-border my-3">10 Listings</h3>
                                <div className="">
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2"><b>All the benefits of Standard, and:</b></h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">2nd highest placement in search results</h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Larger, most prominent listing display in search results</h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Your branding in search results</h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Include a link to your property website </h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Your listing included in our ads on Facebook, Instagram, Google and Bing </h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Dedicated account support and management</h3>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="py-2 px-4 common-btn shadow-none d-block text-right w-100 text-center bg-dark">Select Plan</a>
                        </div>
                    </Col>
                    <Col md={4} className='mb-3'>
                        <div className="feature-card p-3 d-flex justify-content-between flex-column h-100">
                            <div>
                                <button type="button" className="plan-cards-btn mb-3">Signature</button>
                                <h3 className="text-body mb-1">160% more exposure than</h3>
                                <h3 className="text-body mb-1">Standard and 70% more</h3>
                                <h3 className="text-body mb-1">than Premium</h3>
                                <h2 className="price-month my-3">Custom Price</h2>
                                <h3 className="userfeature-title text-center  my-3">Annual contract, Minimum 5-listing</h3>
                                <div className="">
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2"><b>All the benefits of Standard, and:</b></h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Top placement in search results</h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Among the top 3% of all listings across the network</h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">The largest, most prominent listing display and branding in search results</h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Customizable advertising solutions tailored to your business</h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Personalized onboarding, account review and marketing recommendations Dedicated account support and management</h3>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img className="done-icon" src={yesIcon} />
                                        <h3 className="text-body mb-1 ms-2">Exclusive technology and website support</h3>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="py-2 px-4 common-btn shadow-none d-block text-right w-100 text-center bg-dark">Call 737-333-3333</a>
                        </div>
                    </Col>  
                </Row>
                <div className="">
                        <h2 className="section-head mb-4 mt-5 text-start">Frequently Asked Questions</h2>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="feature-card p-3 justify-content-between flex-column h-100">
                                <h3 className="userfeature-title my-3">What is the Land.com Network? </h3>
                                <p className="feature-text mb-3">The Land.com Network represents three largest online marketplaces for rural real estate, and is part of CoStar Group (Nasdaq:CSGP), the leading provider of commercial real estate information, analytics and online marketplaces.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="feature-card p-3 justify-content-between flex-column h-100">
                                <h3 className="userfeature-title my-3">Where will my listings be advertised? </h3>
                                <p className="feature-text mb-3">Your listing will appear on LandNation.com, Land And Farm, and LandWatch.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="feature-card p-3 justify-content-between flex-column h-100">
                                <h3 className="userfeature-title my-3">Why should I advertise with you? </h3>
                                <p className="feature-text mb-3">Our network of sites are designed to help rural real estate buyers find property like yours. With 12+ million monthly visits to Land.com, Land And Farm, and LandWatch, we are the largest land listing network on the Web.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="feature-card p-3 justify-content-between flex-column h-100">
                                <h3 className="userfeature-title my-3">Can I change my plan later? </h3>
                                <p className="feature-text mb-3">Yes. You can change your plan online by logging into your account, or you can contact our Client Services to make the change for you at <span className="text-decoration-underline text-success">support@landnation.com</span> or <span className="text-decoration-underline text-success">512.263.5600</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default PriceList