import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/style.css'

const ListInformation = () => {
  return (
    <>
        <section className='dashboard-section pt-90'>
            <Container>
                <div className='inner-dashboard'>
                    <h2 className='common-sub-heading text-center mb-2'>Listing Information</h2>
                    <div className='step-container mb-3'>
                        <div className='step-cont active'>
                            <span>1</span>
                            Details
                        </div>
                        <div className='step-cont'>
                            <span>2</span>
                            Photos
                        </div>
                        <div className='step-cont'>
                            <span>3</span>
                            Amenities
                        </div>
                    </div>
                    <Row>
                        <Col md={3} className='mb-3'>
                            
                        </Col>
                        <Col md={9} className='mb-3'>
                            <div className='feature-card p-3 rounded-12 h-100'>
                                <h3 className='text-body color-465E38 fw-semibold mb-2'>Step 1 - New Property </h3>
                                <p className='text-body color-828282 mb-2'>Fields marked with a <span className='color-red'>*</span> are required. All other information is optional</p>
                                <div className='feature-card p-2 rounded-12'>
                                    <h4 className='text-body fw-semibold mb-3'>Listing Details</h4>
                                    <Row>
                                        <Col md={4}>
                                            <label className='font-13 fw-semibold'>Listing type:</label>
                                        </Col>
                                        <Col md={8}> 
                                            <div className=''>

                                            </div>
                                        </Col>
                                    </Row>
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

export default ListInformation