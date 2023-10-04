import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import searchIcon from '../../assets/images/search-icon.svg';
import browserImg from '../../assets/images/browser-img1.png';
import featureImg from '../../assets/images/feature-img1.png';
import favImg from '../../assets/images/fav-icon.svg';
import userFeatureImg from '../../assets/images/user-img.png';
import '../../assets/style.css';
import Footer from '../../components/common/footer/Footer';
const Home = () => {
  return (
    <>
    {/* Hero Section */}
      <section className='hero-section'>
        <Container>
          <div className='inner-hero'>
            <h1 className='hero-title text-center'>Search and find your dream</h1>
            <div className='search-card'>
              <Row className='align-items-center'>
                <Col lg={2} md={3}>
                  <button className='search-by-map'>Search by map</button>
                </Col>
                <Col lg={10} md={9}>
                  <div className=''>
                      <div className='d-flex align-items-center'>
                          <input type='text' placeholder='Enter a State, Country or City' className='form-control search-field' />
                          <button className='search-btn'><img src={searchIcon} /></button>
                      </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      {/* Hero Section End */}
      {/* Browser Section */}
      <section className='browser-section'>
          <Container>
            <div className='inner-browser'>
              <h2 className='section-head'>Browse by type</h2>
              <div>
                <Row className='justify-content-center'>
                  <Col md={4} className='mb-3'>
                    <div className='browser-card'>
                      <img src={browserImg} className='browser-img'/>
                      <h3 className='browsercard-title'>Farmland</h3>
                    </div>
                  </Col>
                  <Col md={4} className='mb-3'>
                    <div className='browser-card'>
                      <img src={browserImg} className='browser-img'/>
                      <h3 className='browsercard-title'>Ranch Land</h3>
                    </div>
                  </Col>
                  <Col md={4} className='mb-3'>
                    <div className='browser-card'>
                      <img src={browserImg} className='browser-img'/>
                      <h3 className='browsercard-title'>Recretional</h3>
                    </div>
                  </Col>
                  <Col md={4} className='mb-3'>
                    <div className='browser-card'>
                      <img src={browserImg} className='browser-img'/>
                      <h3 className='browsercard-title'>Commercial</h3>
                    </div>
                  </Col>
                  <Col md={4} className='mb-3'>
                    <div className='browser-card'>
                      <img src={browserImg} className='browser-img'/>
                      <h3 className='browsercard-title'>Homes</h3>
                    </div>
                  </Col>
                  <Col md={4} className='mb-3'>
                    <div className='browser-card'>
                      <img src={browserImg} className='browser-img'/>
                      <h3 className='browsercard-title'>Timber Land</h3>
                    </div>
                  </Col>
                  <Col md={4} className='mb-3'>
                    <div className='browser-card'>
                      <img src={browserImg} className='browser-img'/>
                      <h3 className='browsercard-title'>Homes Sites</h3>
                    </div>
                  </Col>
                  <Col md={4} className='mb-3'>
                    <div className='browser-card'>
                      <img src={browserImg} className='browser-img'/>
                      <h3 className='browsercard-title'>Hunting Land</h3>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
      </section>
      {/* Browser Section End */}
      {/* Feature Section */}
      <section className='feature-section'>
        <Container>
          <div className='inner-feature'>
            <h2 className='section-head mb-4'>Featured Properties</h2>
            <div>
              <Row>
                <Col md={6} className='mb-3'>
                  <div className='feature-card p-3'>
                    <div className='feature-imgbx position-relative mb-3'>
                      <img src={featureImg} className='feature-img'/>
                      <span className='acres-length'>160 Acres</span>
                    </div>
                    <div className='d-flex justify-content-between mb-4'>
                      <div>
                        <h3 className='feature-title mb-0'>$103,500,000</h3>
                        <p className='feature-text'>Wendover, UT, 84083, Box Elder County</p>
                      </div>
                      <div>
                        <button className='fav-btn btn shadow-none'><img src={favImg} /></button>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <img src={userFeatureImg} className='me-3 user-feature' />
                        <div className=''>
                          <h3 className='userfeature-title'>Tom Richerson</h3>
                          <p className='userfeature-text'>usalandsales.com</p>
                        </div>
                      </div>
                      <a href='#' className='py-2 px-4 common-btn shadow-none'>Contact</a>
                    </div>
                  </div>
                </Col>
                <Col md={6} className='mb-3'>
                  <div className='feature-card p-3'>
                    <div className='feature-imgbx position-relative mb-3'>
                      <img src={featureImg} className='feature-img'/>
                      <span className='acres-length'>160 Acres</span>
                    </div>
                    <div className='d-flex justify-content-between mb-4'>
                      <div>
                        <h3 className='feature-title mb-0'>$103,500,000</h3>
                        <p className='feature-text'>Wendover, UT, 84083, Box Elder County</p>
                      </div>
                      <div>
                        <button className='fav-btn btn shadow-none'><img src={favImg} /></button>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <img src={userFeatureImg} className='me-3 user-feature' />
                        <div className=''>
                          <h3 className='userfeature-title'>Tom Richerson</h3>
                          <p className='userfeature-text'>usalandsales.com</p>
                        </div>
                      </div>
                      <a href='#' className='py-2 px-4 common-btn shadow-none'>Contact</a>
                    </div>
                  </div>
                </Col>
                <Col md={6} className='mb-3'>
                  <div className='feature-card p-3'>
                    <div className='feature-imgbx position-relative mb-3'>
                      <img src={featureImg} className='feature-img'/>
                      <span className='acres-length'>160 Acres</span>
                    </div>
                    <div className='d-flex justify-content-between mb-4'>
                      <div>
                        <h3 className='feature-title mb-0'>$103,500,000</h3>
                        <p className='feature-text'>Wendover, UT, 84083, Box Elder County</p>
                      </div>
                      <div>
                        <button className='fav-btn btn shadow-none'><img src={favImg} /></button>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <img src={userFeatureImg} className='me-3 user-feature' />
                        <div className=''>
                          <h3 className='userfeature-title'>Tom Richerson</h3>
                          <p className='userfeature-text'>usalandsales.com</p>
                        </div>
                      </div>
                      <a href='#' className='py-2 px-4 common-btn shadow-none'>Contact</a>
                    </div>
                  </div>
                </Col>
                <Col md={6} className='mb-3'>
                  <div className='feature-card p-3'>
                    <div className='feature-imgbx position-relative mb-3'>
                      <img src={featureImg} className='feature-img'/>
                      <span className='acres-length'>160 Acres</span>
                    </div>
                    <div className='d-flex justify-content-between mb-4'>
                      <div>
                        <h3 className='feature-title mb-0'>$103,500,000</h3>
                        <p className='feature-text'>Wendover, UT, 84083, Box Elder County</p>
                      </div>
                      <div>
                        <button className='fav-btn btn shadow-none'><img src={favImg} /></button>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <img src={userFeatureImg} className='me-3 user-feature' />
                        <div className=''>
                          <h3 className='userfeature-title'>Tom Richerson</h3>
                          <p className='userfeature-text'>usalandsales.com</p>
                        </div>
                      </div>
                      <a href='#' className='py-2 px-4 common-btn shadow-none'>Contact</a>
                    </div>
                  </div>
                </Col>
                <Col md={6} className='mb-3'>
                  <div className='feature-card p-3'>
                    <div className='feature-imgbx position-relative mb-3'>
                      <img src={featureImg} className='feature-img'/>
                      <span className='acres-length'>160 Acres</span>
                    </div>
                    <div className='d-flex justify-content-between mb-4'>
                      <div>
                        <h3 className='feature-title mb-0'>$103,500,000</h3>
                        <p className='feature-text'>Wendover, UT, 84083, Box Elder County</p>
                      </div>
                      <div>
                        <button className='fav-btn btn shadow-none'><img src={favImg} /></button>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <img src={userFeatureImg} className='me-3 user-feature' />
                        <div className=''>
                          <h3 className='userfeature-title'>Tom Richerson</h3>
                          <p className='userfeature-text'>usalandsales.com</p>
                        </div>
                      </div>
                      <a href='#' className='py-2 px-4 common-btn shadow-none'>Contact</a>
                    </div>
                  </div>
                </Col>
                <Col md={6} className='mb-3'>
                  <div className='feature-card p-3'>
                    <div className='feature-imgbx position-relative mb-3'>
                      <img src={featureImg} className='feature-img'/>
                      <span className='acres-length'>160 Acres</span>
                    </div>
                    <div className='d-flex justify-content-between mb-4'>
                      <div>
                        <h3 className='feature-title mb-0'>$103,500,000</h3>
                        <p className='feature-text'>Wendover, UT, 84083, Box Elder County</p>
                      </div>
                      <div>
                        <button className='fav-btn btn shadow-none'><img src={favImg} /></button>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center'>
                        <img src={userFeatureImg} className='me-3 user-feature' />
                        <div className=''>
                          <h3 className='userfeature-title'>Tom Richerson</h3>
                          <p className='userfeature-text'>usalandsales.com</p>
                        </div>
                      </div>
                      <a href='#' className='py-2 px-4 common-btn shadow-none'>Contact</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      {/* Feature Section End */}
      {/* Why Us Section */}
      <section className='why-section'>
        <Container>
          <div className='inner-why'>
            <Row className='justify-content-center'>
              <Col md={11}>
                <h3 className='section-head text-white mb-4'>Why list with Us</h3>
                <p className='why-text mb-5'>Maximize your property's exposure! Whether you're a realtor or an owner, LandNation brings you closer to the right buyers. List today for better leads and results.</p>
                <div className='why-card py-4 px-md-5 px-4 mb-4'>
                  <Row className='align-items-center'>
                    <Col md={6}>
                      <div>
                        <h3 className='why-card-title mb-md-0'>LandNation Group</h3>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <p className='why-card-text mb-0'>Connecting professionals and owners with buyers and investors from around the world</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='why-card py-4 px-md-5 px-4 mb-4'>
                  <Row className='align-items-center'>
                    <Col md={6}>
                      <div>
                        <h3 className='why-card-title mb-md-0'>5 Countries</h3>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <p className='why-card-text mb-0'>We are at the heart of the global rural property scene, covering markets in the USA, Canada, U.K. Ireland and Australia</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='why-card py-4 px-md-5 px-4 mb-4'>
                  <Row className='align-items-center'>
                    <Col md={6}>
                      <div>
                        <h3 className='why-card-title mb-md-0'>Dashboard</h3>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <p className='why-card-text mb-0'>Our dashboard is a gateway to market data and insights that positions you to optimize  strategies and  maximize returns.</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* Why Us Section End */}
      {/* List Section */}
      <section className='list-section'>
        <Container>
          <div className='inner-list'>
            <Row className='justify-content-center'>
              <Col md={8}>
                <div className='text-center'>
                  <h2 className='section-head text-white mb-4'>List your property on the LandNation Group Websites</h2>
                  <a href='#' className='py-2 px-4 bg-white d-inline-block white-btn common-btn shadow-none'>Contact</a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* List Section End */}
      <Footer/>
    </>
  )
}

export default Home