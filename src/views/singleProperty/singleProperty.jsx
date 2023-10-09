import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../../assets/style.css';
import greenImage from '../../assets/images/green-bg-picture.jpg';
import userProfileImg from '../../assets/images/user-profile.png';


const SingleProperty = () => {
  return (
    <>
    <section className="picture-section">
        <Container>
            <div className="feature-card p-3">
                <Row>
                    <Col lg={6}>
                        <div>
                            <img src={greenImage} className="picture-card-imd"/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <img src={greenImage} className="picture-card-imd"/>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-between my-3 align-items-center">
                    <button className="available-btn" type="button">Available</button> 
                    <h2 className="section-head mb-0">$900,000</h2>
                </div>
                <div>
                    <h3 className="text-body mb-4">McCrory, AR <br/> (Jackson County)</h3>
                    <h3 className="text-body">Size:<span className="feature-text"> 140 acres</span></h3>
                    <h3 className="text-body">Type:<span className="feature-text">  Farms and Ranches, Recreational Property, Hunting Property</span></h3>
                </div>
                <div className="position-relative">
                    <h3 className="Refuge-title my-4">Refuge on the Cache</h3>
                    <p className="feature-text ">+/-137 Acres in Jackson County, Arkansas, near McCrory <br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="d-flex justify-content-end">
                            <a href="#" className="py-2 px-4 common-btn shadow-none text-right position-relative z-index99">Read More</a>
                        </div>
                        <div className="text-overlay"></div>
                </div>
            </div>
            <div>
                <div className="py-5">
                    <h2 className="section-head mb-4 text-start">Map</h2>
                    <div>
                        <iframe className="border-r14" width="100%" height="600" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=new%20york+()&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                </div>
                <div className="mb-39">
                    <h3 className="common-sub-heading mb-1">Amenities</h3>
                    <p className="feature-text">Agriculture and Farming</p>
                </div>
                <div className="mb-5">
                    <h3 className="common-sub-heading mb-1">Directions</h3>
                    <p className="feature-text">Contact us for directions to this property</p>
                </div>
                <div className="mb-3">
                    <h3 className="common-sub-heading mb-1">Contact Seller</h3>
                    <div className="d-flex align-items-center mt-3 mb-4">
                        <img src={userProfileImg} className="me-3 user-feature-img"/>
                        <div className="">
                            <h3 className="userfeature-title">Tom Richerson</h3>
                            <p className="userfeature-text">usalandsales.com</p>
                            <p className="feature-text text-decoration-underline text-dark mt-3">View Phone Number</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1 mb-1" className="form-label text-body">Name</label>
                        <input type="email" className="form-control seller-input border-0" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1 mb-1" className="form-label text-body">Your Phone Number</label>
                        <input type="email" className="form-control seller-input border-0" id="exampleFormControlInput1" placeholder="+1 (234) 567-8900" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1 mb-1" className="form-label text-body">Your Email Address</label>
                        <input type="email" className="form-control seller-input border-0" id="exampleFormControlInput1" placeholder="example@gmail.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1 mb-1" className="form-label text-body">Are you a licensed real estate agent or broker?</label>
                        <textarea type="email" className="form-control seller-input seller-text-area border-0" id="exampleFormControlInput1" placeholder="Message"></textarea>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label feature-text" for="flexCheckDefault">
                            Yes, I’d like to periodically receive information about the land market.
                        </label>
                    </div>
                    <button className='common-btn w-100 d-block mb-3 py-2 border-0 mt-4'>Contact Seller</button>
                    <p className='text-center mb-5 text-body color-828282'>By clicking the button, you agree to our Terms of Use and Privacy Policy.</p>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default SingleProperty