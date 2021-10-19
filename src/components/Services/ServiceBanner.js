import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceBanner from '../../images/doctor-page-bg.jpg';

const ServiceBanner = () => {
    const aboutBanner = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${serviceBanner})`
    }
    return (
        <div style={aboutBanner}>
            <Container>
                <Row>
                    <Col>
                        <div className="common-banner-info">
                            <h5 className="tagline">Health Service</h5>
                            <h1 className="banner-header">Services</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceBanner;