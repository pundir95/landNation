import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../assets/style.css';
import logoImg from '../../../assets/images/LandNation-dark.svg';
import loginImg from '../../../assets/images/hero-section2.png';

const AgentSignIn = () => {
  return (
    <>
      <section className='auth-section py-lg-5 py-4'>
        <Container>
          <div className='inner-auth'>
            <Row>
              <Col lg={6}>
                <div className='auth-content d-flex justify-content-between flex-column h-100'>
                    <div>
                      <img src={logoImg} className='login-logo mb-5' />
                      <h2 className='text-center auth-heading'>Login</h2>
                      <p className='text-center auth-text mb-4'>Let's get Started</p>
                      <form>
                        <input type='email' placeholder='Enter Email' className='form-control auth-field shadow-none mb-3' />
                        <input type='password' placeholder='Enter Password' className='form-control auth-field shadow-none mb-4' />
                        <button className='auth-btn'>Login</button>
                      </form>
                    </div>
                    <div className='text-center mt-3'>
                      <a href='#' className='auth-link'>Don't have Account? <span>Sign Up</span></a>
                    </div>
                </div>
              </Col>
              <Col lg={6} className='d-lg-block d-none'>
                <div className='auth-img h-100'>
                    <img src={loginImg} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AgentSignIn