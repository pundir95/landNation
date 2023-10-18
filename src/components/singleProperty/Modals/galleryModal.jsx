import React, { useState } from "react";
import { Modal , Button, Nav, Tab } from "react-bootstrap";
import greenImage from "../../../assets/images/green-bg-picture.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import closeIcon from '../../../assets/images/close-circle.svg'
import favIcon from '../../../assets/images/fav-icon.svg'
import shareIcon from '../../../assets/images/share-icon.svg'
function GalleryPopup({ show, handleClose }) {
    var featureSlider = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
        <Modal show={show} onHide={handleClose} size="lg" className="gallery-popup" centered>
            <Modal.Header className="justify-content-end border-0">
                <img src={closeIcon} className="close-icon cursor-pointer" onClick={handleClose}/>
            </Modal.Header>
            <Modal.Body>
                <Tab.Container defaultActiveKey="gallery">
                    <Nav variant="pills" className="popup-pills">
                        <Nav.Item className="w-100 text-center">
                            <Nav.Link eventKey="gallery">Gallery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="w-100 text-center">
                            <Nav.Link eventKey="property-map">Property Map</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="w-100 text-center">
                            <Nav.Link eventKey="location-map">Location Map</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="gallery">
                            <div className="gallery-contain mt-3">
                                <div className="feature-slider position-relative">
                                    <p className="slide-pages"><span className="current-slide">6</span>/<span className="total-slides">14</span></p>
                                    <Slider {...featureSlider}>
                                    <div>
                                        <img
                                        src={greenImage}
                                        className="picture-card-imd"
                                        />
                                    </div>
                                    <div>
                                    <img
                                        src={greenImage}
                                        className="picture-card-imd" />
                                    </div>
                                    <div>
                                        <img
                                        src={greenImage}
                                        className="picture-card-imd"
                                        />
                                    </div>
                                    <div>
                                        <img
                                        src={greenImage}
                                        className="picture-card-imd"
                                        />
                                    </div>
                                    </Slider>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="property-map">
                            <div className="mt-3 w-100 rounded-14"><iframe width="100%" height="583" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Property%20Map)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe></div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="location-map">
                            <div className="w-100 mt-3 rounded-14"><iframe width="100%" height="583" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Property%20Map)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe></div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <div className="d-flex justify-content-between align-items-center py-3 mt-2">
                    <a href="#" className="common-btn py-2 px-4">Contact</a>
                    <div>
                        <Button variant="transparent" className="popup-btn me-2"><img src={favIcon} /></Button>
                        <Button variant="transparent" className="popup-btn"><img src={shareIcon} /></Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </>
  );
};

export default GalleryPopup;