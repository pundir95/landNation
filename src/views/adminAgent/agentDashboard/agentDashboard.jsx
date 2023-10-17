import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import userImage from '../../../assets/images/dashboard-user-img.png';
import arrowRight from '../../../assets/images/arrow-right.svg';
import greyArrowRight from '../../../assets/images/grey-arrow-right.svg';

const AgentDashboard = () => {
  return (
    <>
        <section className='dashboard-section pt-90'>
            <Container>
                <div className='inner-dashboard'>
                    <h2 className='common-sub-heading'>Your Dashboard</h2>
                    <p className='text-body color-828282 mb-40'>Your Dashboard gives you a birds-eye view into the activity on your listings.</p>
                    <Row>
                        <Col md={6} className='mb-3'>
                            <div className='feature-card p-3 rounded-12 h-100'>
                                <h3 className='text-body color-465E38 fw-semibold mb-3'>My LandNation Profile</h3>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex justify-content-between flex-column'>
                                        <h4 className='common-sub-heading fw-normal'>John Smith</h4>
                                        <div>
                                            <a href='#' className='text-body'>(205) 644-2070</a><br/>
                                            <a href="#" className='text-body'>mworley@mossyoak.com</a>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <img src={userImage} className='dashboard-user-img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mb-3'>
                            <div className='feature-card p-3 rounded-12 h-100'>
                                <h3 className='text-body color-465E38 fw-semibold mb-2'>Power Tools</h3>
                                <p className='text-body color-828282 mb-2'>Use these Power Tools to increase your reach and marketing opportunitues.</p>
                                <div>
                                    <a href='#' className='text-body text-decoration-underline d-inline-block mb-1'>Custom URL</a>
                                    <p className='text-body color-828282 mb-1'>Power Search</p>
                                    <p className='text-body color-828282 mb-0'>Feature a Property</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    <div className='feature-card p-3 rounded-12 mb-3'>
                        <h3 className='text-body color-465E38 fw-semibold mb-3'>Aggregated Statistics for the Last 90 days (As of 7/2/2023):</h3>
                        <div className='feature-card p-1 rounded-12'>
                            <div className='table-responsive'>
                                <table className='table stats-table mb-0 table-borderless'>
                                    <thead>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='feature-card p-3 rounded-12 mb-3'>
                        <h3 className='text-body color-465E38 fw-semibold mb-3'>Leads</h3>
                        <p className='mb-0 text-body color-828282'>You do not currently have any leads. Add photos to your listings and create flyers to get the word out about your property</p>
                    </div>
                    <div className='feature-card p-3 rounded-12 mb-3'>
                        <div className='mb-3 d-flex justify-content-between align-items-center'>
                            <h3 className='text-body color-465E38 fw-semibold'>Top 1 Most Active Listings in the last 90 days</h3>
                            <div className=''>
                                <a href='#' className='view-all-btn'>View All <span><img src={greyArrowRight} className='grey-arrow' /><img src={arrowRight} className='white-arrow' /></span></a>
                            </div>
                        </div>
                        <div className='feature-card p-1 rounded-12'>
                            <div className='table-responsive'>
                                <table className='table stats-table mb-0 table-borderless'>
                                    <thead>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='feature-card p-3 rounded-12 mb-3'>
                        <div className='mb-3 d-flex justify-content-between align-items-center'>
                            <h3 className='text-body color-465E38 fw-semibold'>Top 1 Most Active Listings in the last 90 days</h3>
                            <div className=''>
                                <a href='#' className='view-all-btn'>View All <span><img src={greyArrowRight} className='grey-arrow' /><img src={arrowRight} className='white-arrow' /></span></a>
                            </div>
                        </div>
                        <div className='feature-card p-1 rounded-12'>
                            <div className='table-responsive'>
                                <table className='table stats-table mb-0 table-borderless'>
                                    <thead>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                        <th className='stats-head'><p>Searches</p></th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                            <td className='stats-data'>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default AgentDashboard