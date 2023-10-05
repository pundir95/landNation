import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import searchIcon from '../../assets/images/search-icon.svg';
import filterIcon from '../../assets/images/filter.svg';
import '../../assets/style.css';
import Agent from '../../components/findAgent/Agent';

const FindAgent = () => {
  return (
    <>
      <section className='filter-section pt-2'>
        <Container>
          {/* <div className='d-flex align-items-center mb-21'>
            <div className='search-card bg-grey py-lg-2 py-1 p-3 w-100 me-3'>
              <Row className='align-items-center'>
                <Col lg={3} md={3}>
                  <button className='search-by-map p-1'>Search by map</button>
                </Col>
                <Col lg={9} md={9}>
                  <div className=''>
                      <div className='d-flex align-items-center'>
                          <input type='text' placeholder='Enter a State, Country or City' className='form-control search-field py-1' />
                          <button className='search-btn small-search-btn'><img src={searchIcon} /></button>
                      </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <button className='filter-btn'>
                <img src={filterIcon}/>Filter
              </button>
            </div>
          </div> */}
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <p className='text-body'>Arkansas Land for Sale - 14,342 Listings</p>
            <Form.Select className='sort-select shadow-none'>
              <option>Sort</option>
              <option value="default">Default</option>
              <option value="acres_small_large">Acres: Small to Large</option>
              <option value="acres_large_small">Acres: Large to Small</option>
              <option value="newest">Newest</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
              <option value="price_per_acres_low_high">Price per Acres: Low to High</option>
              <option value="price_per_acres_high_low">Price per Acres: High to Low</option>
            </Form.Select>
          </div>
          <Agent/>
        </Container>
      </section>
    </>
  )
}

export default FindAgent