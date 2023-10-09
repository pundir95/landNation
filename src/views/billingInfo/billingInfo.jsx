import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/style.css'
import downIcon from '../../assets/images/down-icon.svg'
import lockIcon from '../../assets/images/lock-icon.svg'
import lockGreyIcon from '../../assets/images/lock-grey-icon.svg'
import digitLogo from '../../assets/images/digicert-logo.png'
import cardImg from '../../assets/images/card-img.png'

const accountInfo = () => {
  return (
    <>
        <section className='py-5'>
            <Container>
                <div className='inner-account'>
                    <Row>
                        <Col md={8} className='mb-4'>
                            <div className='feature-card p-3 d-flex justify-content-between align-items-center mb-2'>
                                <h2 className='feature-title fw-semibold mb-0'>Account Info</h2>
                                <a href='#' className='billing-btn'>Edit</a>
                            </div>
                            <div className='feature-card p-3'>
                                <h2 className='feature-title fw-semibold mb-4'>Billing Info</h2>
                                <div>
                                    <div className='mb-3'>
                                        <label className='text-body error-label mb-1'>Address Line 1 <span className='required-text'>(required)</span></label>
                                        <input type='text' className='form-control account-field error-field' placeholder='Address' />
                                        <span className='error-message'>*Please enter valid value</span>
                                    </div>
                                    <div className='mb-3'>
                                        <label className='text-body mb-1'>Address Line 2 <span className='required-text'>(required)</span></label>
                                        <input type='text' className='form-control account-field' placeholder='Address Line 2' />
                                        <span className='error-message d-none'>*Please enter valid email address</span>
                                    </div>
                                    <div className='mb-4'>
                                        <label className='text-body mb-1'>Zip Code <span className='required-text'>(required)</span></label>
                                        <input type='text' className='form-control account-field w-auto' placeholder='Zip Code' />
                                        <span className='error-message d-none'>*Please enter valid phone number</span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mb-4'>
                                        <div>
                                            <h2 className='feature-title fw-semibold mb-2'>Payment Info</h2>
                                            <p className='d-flex align-items-center mb-0 d-flex align-items-center color-9e9e9e'><img src={lockGreyIcon} className='me-2 lock-grey-img' />Secured with 256-bit SSL encryption</p>
                                        </div>
                                        <img src={digitLogo} className='digi-logo' />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='text-body mb-1'>Name on Card <span className='required-text'>(required)</span></label>
                                        <input type='text' className='form-control account-field' placeholder='Joshua Seidler' />
                                        <span className='error-message d-none'>*Please enter valid value</span>
                                    </div>
                                    <div className='mb-3'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <label className='text-body mb-1'>Card Number <span className='required-text'>(required)</span></label>
                                            <img src={cardImg} className='card-image' />
                                        </div>
                                        <div className='position-relative'>
                                            <input type='text' className='form-control account-field pe-35' />
                                            <span className='lock-icon'>
                                                <img src={lockIcon} />
                                            </span>
                                        </div>
                                        <span className='error-message d-none'>*Please enter valid email address</span>
                                    </div>
                                    <div className='mb-3'>
                                        <div>
                                            <label className='text-body mb-1'>Expiration <span className='required-text'>(required)</span></label>
                                        </div>
                                        <div className='d-flex '>
                                            <input type='text' className='form-control account-field me-2 w-auto expiry-field' placeholder='MM' />
                                            <input type='text' className='form-control account-field w-auto expiry-field' placeholder='YYYY' />
                                        </div>
                                        <span className='error-message d-none'>*Please enter valid email address</span>
                                    </div>
                                    <div className='mb-3'>
                                        <div>
                                            <label className='text-body mb-1'>Security Code <span className='required-text'>(required)</span></label>
                                        </div>
                                        <div className='position-relative w-auto d-inline-block'>
                                            <input type='text' className='form-control account-field pe-35 expiry-field' />
                                            <span className='lock-icon'>
                                                <img src={lockIcon} />
                                            </span>
                                        </div>
                                        <span className='error-message d-none'>*Please enter valid email address</span>
                                    </div>
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