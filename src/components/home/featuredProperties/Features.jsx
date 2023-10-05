import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import FeatureList from './FeatureList';


const Features = () => {
  return (
      <section className='feature-section'>
        <Container>
          <div className='inner-feature'>
            <h2 className='section-head mb-4'>Featured Properties</h2>
             <FeatureList/>
          </div>
        </Container>
      </section>
  )
}

export default Features