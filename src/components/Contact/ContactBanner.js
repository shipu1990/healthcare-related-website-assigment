import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactBanner from '../../images/Contact-page-bg.jpg';

const ContactBanner = () => {
    const aboutBanner = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${contactBanner})`
    }
    return (
        <div style={aboutBanner}>
        <Container>
            <Row>
                <Col>
                    <div className="common-banner-info">
                        <h5 className="tagline">Health Service</h5>
                        <h1 className="banner-header">Contact</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default ContactBanner;
