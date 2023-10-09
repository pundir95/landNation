import React from 'react'
import { Container } from 'react-bootstrap'
import userImage from '../../assets/images/user-profile.png';
import '../../assets/style.css';

const RealEstate = () => {
  return (
    <>
        <section className="picture-section">
            <Container>
                <div className="feature-card p-3"> 
                    <div className="d-flex align-items-center mt-3 mb-4">
                        <img className="me-3 user-feature-profile" src={userImage} />
                        <div className="">
                            <h3 className="userfeature-title font-24">Tom Richerson</h3>
                            <p className="text-body mb-0 mt-1">Real Estate </p>
                                <p className="text-body mb-2">Childress, TX</p>
                            <p className="feature-text text-decoration-underline text-dark mb-3">View Phone Number</p>
                            <div className="mt-2">
                                <a href="#" className="py-2 px-4 common-btn shadow-none text-right position-relative z-index99 d-inlineblock mb-3 me-2">Contact</a>
                                <a href="#" className="py-2 px-4 common-btn shadow-none text-right position-relative z-index99 d-inlineblock bg-lightblk mb-3">Website</a>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        <h3 className="about-title mt-4 ">About</h3>
                        <p className="feature-text ">+/-137 Acres in Jackson County, Arkansas, near McCrory <br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="d-flex justify-content-end">
                            <a href="#" className="py-2 px-4 common-btn shadow-none text-right position-relative z-index99 bg-lightblk">Read More</a>
                        </div>
                        <div className="text-overlay"></div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default RealEstate
