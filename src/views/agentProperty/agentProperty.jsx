import React from 'react'
import { Container } from 'react-bootstrap'
import greenImage from '../../assets/images/green-bg-picture.jpg';
import '../../assets/style.css';

const AgentProperty = () => {
  return (
    <>
        <section className="picture-section">
            <Container>
                <h2 className="section-head mb-4 mt-5">Benton County, AR Top Agents</h2>
                <div className="feature-card p-3 d-flex align-items-center mb-3">
                    <div className="me-4">
                        <img className="agent-card-img" src={greenImage} />
                    </div>
                    <div className="w-100">
                        <h3 className="feature-title mb-1">True North Realty Group</h3>
                        <p className="feature-text">True North Realty Group</p>
                        <p className="feature-text">Rogers, AR </p>
                        <p className="feature-text mb-2">(479)435-4964</p>
                        <a href="#" className="py-2 px-4 common-btn shadow-none d-block text-right w-100 text-center">Contact</a>
                    </div>
                </div>
                <div className="feature-card p-3 d-flex align-items-center mb-3">
                    <div className="me-4">
                        <img className="agent-card-img" src={greenImage} />
                    </div>
                    <div className="w-100">
                        <h3 className="feature-title mb-1">True North Realty Group</h3>
                        <p className="feature-text">True North Realty Group</p>
                        <p className="feature-text">Rogers, AR </p>
                        <p className="feature-text mb-2">(479)435-4964</p>
                        <a href="#" className="py-2 px-4 common-btn shadow-none d-block text-right w-100 text-center">Contact</a>
                    </div>
                </div>
                <div className="feature-card p-3 d-flex align-items-center mb-3">
                    <div className="me-4">
                        <img className="agent-card-img" src={greenImage} />
                    </div>
                    <div className="w-100">
                        <h3 className="feature-title mb-1">True North Realty Group</h3>
                        <p className="feature-text">True North Realty Group</p>
                        <p className="feature-text">Rogers, AR </p>
                        <p className="feature-text mb-2">(479)435-4964</p>
                        <a href="#" className="py-2 px-4 common-btn shadow-none d-block text-right w-100 text-center">Contact</a>
                    </div>
                </div>
                <div className="feature-card p-3 d-flex align-items-center mb-3">
                    <div className="me-4">
                        <img className="agent-card-img" src={greenImage} />
                    </div>
                    <div className="w-100">
                        <h3 className="feature-title mb-1">True North Realty Group</h3>
                        <p className="feature-text">True North Realty Group</p>
                        <p className="feature-text">Rogers, AR </p>
                        <p className="feature-text mb-2">(479)435-4964</p>
                        <a href="#" className="py-2 px-4 common-btn shadow-none d-block text-right w-100 text-center">Contact</a>
                    </div>
                </div>
                <div className="feature-card p-3 d-flex align-items-center mb-3">
                    <div className="me-4">
                        <img className="agent-card-img" src={greenImage} />
                    </div>
                    <div className="w-100">
                        <h3 className="feature-title mb-1">True North Realty Group</h3>
                        <p className="feature-text">True North Realty Group</p>
                        <p className="feature-text">Rogers, AR </p>
                        <p className="feature-text mb-2">(479)435-4964</p>
                        <a href="#" className="py-2 px-4 common-btn shadow-none d-block text-right w-100 text-center">Contact</a>
                    </div>
                </div>
                
            </Container>
        </section>
    </>
  )
}

export default AgentProperty
