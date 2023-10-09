import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import userImage from '../../assets/images/dashboard-user-img.png';

const Result = () => {
  return (
    <>
        <section className='dashboard-section'>
            <Container>
                <div className='inner-dashboard'>
                    <h2 className='common-sub-heading'>Your Dashboard</h2>
                    <p className='text-body color-828282'>Your Dashboard gives you a birds-eye view into the activity on your listings.</p>
                    <Row>
                        <Col md={6}>
                            <div className='feature-card p-3'>
                                <h3 className='text-body color-465E38'>My LandNation Profile</h3>
                                <div>
                                    <div>
                                        <h4>John Smith</h4>
                                        <div>
                                            <a href='#'>(205) 644-2070</a>
                                            <a href="#">mworley@mossyoak.com</a>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <img src={userImage} />
                                    </div>
                                </div>
                            </div>
                            <div className='feature-card p-3'>
                                <h3 className='text-body color-465E38'>Power Tools</h3>
                                <p className='text-body color-828282'>Use these Power Tools to increase your reach and marketing opportunitues.</p>
                                <div>
                                    <a href='#' className='text-body d-inline-block mb-1'>Custom URL</a>
                                    <p className='text-body color-828282 mb-1'>Power Search</p>
                                    <p className='text-body color-828282 mb-0'>Feature a Property</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Result