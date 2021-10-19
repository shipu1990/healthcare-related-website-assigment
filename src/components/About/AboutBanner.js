import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Aboutbanner from '../../images/About-page-bg.jpg';
import './About.css'

const AboutBanner = () => {
    const aboutBanner = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${Aboutbanner})`
    }
    return (
            <div style={aboutBanner}>
            <Container>
                <Row>
                    <Col>
                        <div className="common-banner-info">
                            <h5 className="tagline">Health Service</h5>
                            <h1 className="banner-header">About Us</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutBanner;