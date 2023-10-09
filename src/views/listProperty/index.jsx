import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/style.css';
import userImage from '../../assets/images/user-group.png';
import userGrowth from '../../assets/images/growth.png';
import userSetting from '../../assets/images/setting.png';



const ListProperty = () => {
  return (
    <>
    <section className="hero-section list-hero-sapce">
        <Container>
            <div className="inner-hero">
                <h1 className="hero-title text-center font38">List your property today! Reach more buyers. Get more leads. Sell more land.</h1>
                <div className="search-card p43-24">
                    <div className="">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1 mb-1" className="form-label text-body">How many listings do you want to advertise?</label>
                            <select className="form-select form-select-lg mb-3 seller-input " aria-label=".form-select-lg example">
                                <option selected className="seller-input">select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1 mb-1" className="form-label text-body">Are you a licensed real estate agent or broker?</label>
                            <select className="form-select form-select-lg mb-3 seller-input " aria-label=".form-select-lg example">
                                <option selected className="seller-input">select</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                              </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1 mb-1" className="form-label text-body">Your Phone Number</label>
                            <input type="email" className="form-control seller-input border-0" id="exampleFormControlInput1" placeholder="+1 (234) 567-8900" />
                        </div>
                        <div className="mb-4">
                            <label for="exampleFormControlInput1 mb-1" className="form-label text-body">Your Email Address</label>
                            <input type="email" className="form-control seller-input border-0" id="exampleFormControlInput1" placeholder="example@gmail.com" />
                        </div>
                        <a href="#" className="py-2 px-4 common-btn shadow-none d-block text-right w-100 text-center">Contact</a>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    <section className="landwatch">
        <Container>
            <h2 className="section-head mb-2 mt-5">Why should you list your</h2>
            <h2 className="section-head mb-4 mt-0"> property on LandWatch?</h2>
            <Row>
                <Col md={4} className='mb-3'>
                   <div className="feature-card p-4">
                    <div className="landwatch-cards-iconbg mb-3">
                        <img className="landwatch-cards-icon" src={userImage} />
                    </div>
                    <div className="mb-4">
                        <p className="feature-text">Gain exposure across </p>
                    <p className="feature-text">the LandNation Network</p>
                    <p className="feature-text">at once</p>
                    </div>
                   </div>
                </Col>
                <Col md={4} className='mb-3'>
                    <div className="feature-card p-4">
                     <div className="landwatch-cards-iconbg mb-3">
                        <img className="landwatch-cards-icon" src={userGrowth} />
                     </div>
                     <div className="mb-4">
                         <p className="feature-text">Receive 2+ million visits </p>
                     <p className="feature-text">a month across the</p>
                     <p className="feature-text">network</p>
                     </div>
                    </div>
                </Col>
                <Col md={4} className='mb-3'>
                <div className="feature-card p-4">
                    <div className="landwatch-cards-iconbg mb-3">
                        <img className="landwatch-cards-icon" src={userSetting} />
                    </div>
                    <div className="mb-4">
                        <p className="feature-text">Get access to top-notch</p>
                    <p className="feature-text">marketing tools and</p>
                    <p className="feature-text">acustomer service</p>
                    </div>
                </div>
                </Col>
            </Row>
            <div className="mb-59 mt-45">
                <div className="question-call d-flex justify-content-center align-items-center m-auto">
                    <div className="">
                        <p className="text-center mb-0 font-22">Questions? Call at (123) 456-7890
                            Mon. - Fri., 8am - 5pm CST</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default ListProperty