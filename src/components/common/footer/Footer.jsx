import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import planeIcon from '../../../assets/images/plane-icon.svg';
// import '../../../assets/style.css';
import logoImg from '../../../assets/images/LandNation.png';
import youTubeIcon from '../../../assets/images/youtube.svg';
import fbIcon from '../../../assets/images/facebook.svg';
import instaIcon from '../../../assets/images/instagram.svg';
import twitterIcon from '../../../assets/images/twitter.svg';
import linkedinIcon from '../../../assets/images/linkedin.svg';
const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={10}>
                        <div className='inner-footer'>
                            <h3 className='footer-title'>Subscribe to the newsletter</h3>
                            <div className='newsletter-card d-flex align-items-center mb-4'>
                                <input type='text' placeholder='example@gmail.com' className='form-control newsletter-field search-field' />
                                <button className='newsletter-btn search-btn'><img src={planeIcon}/></button>
                            </div>
                            <Row>
                                <Col lg={6} className='mb-lg-0 mb-5'>
                                    <div className='footer-wrapper'>
                                        <h3 className='footer-list-head mb-3'>Listing By State</h3>
                                        <div className='footer-link-container'>
                                            <ul className='footer-list ps-0'>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Texas Land For Sale</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Tennessee Land For Sale</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Georgia Land For Sale</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>North Carolina Land For Sale</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Missouri Land For Sale</a>
                                                </li>
                                            </ul>
                                            <ul className='footer-list ps-0'>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Texas Land For Sale</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Tennessee Land For Sale</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Georgia Land For Sale</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>North Carolina Land For Sale</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Missouri Land For Sale</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} className='mb-md-0 mb-5'>
                                    <div className='footer-wrapper'>
                                        <h3 className='footer-list-head mb-3'>Resource</h3>
                                        <div className='footer-link-container'>
                                            <ul className='footer-list ps-0'>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Add a Listing</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Advertise</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Find an Agent</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={6}>
                                    <div className='footer-wrapper'>
                                        <h3 className='footer-list-head mb-3'>About</h3>
                                        <div className='footer-link-container'>
                                            <ul className='footer-list ps-0'>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Home</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Contact Us</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Terms and Conditions</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Privacy Policy</a>
                                                </li>
                                                <li className='footer-item'>
                                                    <a href='#' className='footer-link'>Site Map</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='social-media'>
                <Container>
                    <div className='d-sm-flex justify-content-between align-items-center'>
                        <div className=''>
                            <img src={logoImg} />
                        </div>
                        <div>
                            <ul className='social-list d-flex mb-0'>
                                <li className='social-item'>
                                    <a href='#'>
                                        <img src={youTubeIcon}/>
                                    </a>
                                </li>
                                <li className='social-item'>
                                    <a href='#'>
                                        <img src={fbIcon}/>
                                    </a>
                                </li>
                                <li className='social-item'>
                                    <a href='#'>
                                        <img src={twitterIcon}/>
                                    </a>
                                </li>
                                <li className='social-item'>
                                    <a href='#'>
                                        <img src={instaIcon}/>
                                    </a>
                                </li>
                                
                                <li className='social-item'>
                                    <a href='#'>
                                        <img src={linkedinIcon}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    </>
  )
}

export default Footer