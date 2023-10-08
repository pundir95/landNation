import React from 'react'
import { Container, Row, Col, Form, Pagination } from 'react-bootstrap';
import closeIcon from '../../assets/images/cancel.svg';
import filterIcon from '../../assets/images/filter.svg';
import '../../assets/style.css';
import Agent from '../../components/findAgent/Agent';

const FindAgent = () => {
  return (
    <>
      <section className='filter-section pt-2'>
        <Container>
          <div className='d-flex align-items-center mb-21'>
            <div>
              <button className='filter-btn'>
                <img src={filterIcon}/>Filter
              </button>
            </div>
          </div>
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
      <div className='filter-drawer'>
          <div className='d-flex justify-content-between align-items-center py-3 px-4'>
              <h3 className='feature-title mb-0 fw-semibold'>Filter</h3>
              <button className='close-btn'><img src={closeIcon} /></button>
          </div>
      </div>
      <div>
        <Pagination className='justify-content-center mt-4 align-items-center'>
          <Pagination.Prev className='pagination-arrow me-3' />
          <div className='pages-link d-flex'>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item active>{20}</Pagination.Item>
          </div>
          <Pagination.Next className='pagination-arrow next-arrow ms-3' />
        </Pagination>
      </div>
    </>
  )
}

export default FindAgent