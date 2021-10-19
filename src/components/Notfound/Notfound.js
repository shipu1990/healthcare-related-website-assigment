import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.png';

const Notfound = () => {
    return (
        <div className="service-container">
            <Container>
                <Row>
                    <Col>
                        <Image src={notfound} />
                        <h3 className="inner-page-head mt-5">Page Not Found</h3>
                        <p className="inner-para">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                      <Link to="/home" className="btn btn-primary">Go to Home</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Notfound;