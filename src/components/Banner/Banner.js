import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import homeBackground from '../../images/Banner-img.jpg'

import './Banner.css';

const Banner = () => {
    const homeBanner = {
        width: "100%",
        height: "600px",
        backgroundImage: `url(${homeBackground})`
    }
    return (
        <>
        <div style={homeBanner}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="banner-info">
                            <h5 className="tagline">Health Service</h5>
                            <h1 className="banner-header">Your Health is Our Top Priority</h1>
                            <p className="banner-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
        </>
    );
};

export default Banner;