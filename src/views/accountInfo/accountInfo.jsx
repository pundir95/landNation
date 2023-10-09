import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/style.css'
import downIcon from '../../assets/images/down-icon.svg'
import lockIcon from '../../assets/images/lock-icon.svg'

const accountInfo = () => {
  return (
    <>
        <section className='py-5'>
            <Container>
                <div className='inner-account'>
                    <Row>
                        <Col md={8} className='mb-4'>
                            <div className='feature-card p-3'>
                                <h2 className='feature-title fw-semibold mb-4'>Account Info</h2>
                                <div>
                                    <div className='mb-3'>
                                        <label className='text-body error-label mb-1'>Full Name <span className='required-text'>(required)</span></label>
                                        <input type='text' className='form-control account-field error-field' placeholder='Full Name' />
                                        <span className='error-message'>*Please enter valid value</span>
                                    </div>
                                    <div className='mb-3'>
                                        <label className='text-body mb-1'>Email Address <span className='required-text'>(required)</span></label>
                                        <input type='email' className='form-control account-field' placeholder='josh@torinholding.com' />
                                        <span className='error-message d-none'>*Please enter valid email address</span>
                                    </div>
                                    <div className='mb-4'>
                                        <label className='text-body mb-1'>Phone Number <span className='required-text'>(required)</span></label>
                                        <input type='text' className='form-control account-field' placeholder='479-379-8351' />
                                        <span className='error-message d-none'>*Please enter valid phone number</span>
                                    </div>
                                    <button className='billing-btn'>Continue to Billing Info</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='mb-4'>
                            <div className='feature-card p-3 mb-3'>
                                <h2 className='feature-title fw-semibold mb-3'>Summary</h2>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-body'>Plan:</p>
                                    <p className='text-body d-flex align-items-center'>Standard <img src={downIcon} className='ms-2 icon-down' /></p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-body'>Listings:</p>
                                    <p className='text-body d-flex align-items-center'>Single Listings<img src={downIcon} className='ms-2 icon-down' /></p>
                                </div>
                                <div className='total-due pt-3 d-flex justify-content-between'>
                                    <p className='text-body fw-semibold'>Total Due Today:</p>
                                    <p className='text-body fw-semibold'>$90.00</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-body mb-0'>First Renewal:</p>
                                    <p className='text-body d-flex align-items-center mb-0'>August 03, 2023</p>
                                </div>
                            </div>
                            <div className='feature-card p-3'>
                                <h2 className='feature-title fw-semibold mb-3'>Questions?</h2>
                                <div className=''>
                                    <p className='text-body mb-1 color-7c7c7c'>Call us at:</p>
                                    <a href='#' className='text-body d-inline-block mb-1'>512 263 5600</a>
                                    <p className='text-body d-flex align-items-center mb-0 color-7c7c7c'>9am - 5pm CST Monday - Friday</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <p className='text-body color-828282 my-4'>By placing this order, you understand that you are purchasing a monthly, non-refundable subscription and will be billed $90/00 per month. This subscription will automatically renew every month unless canceled 30 days prior to renewal, per our Terms and Conditions.</p>
                        </Col>
                        <Col md={8}>
                            <a href='#' className='py-2 common-btn fw-semibold text-center d-flex align-items-center justify-content-center w-100 max'><img src={lockIcon} className='lock-img me-2' />Place Order</a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    </>
  )
}

export default accountInfo