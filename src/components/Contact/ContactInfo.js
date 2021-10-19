import React from 'react';
import { Col, Container, Form, Row, Button} from 'react-bootstrap';
import './Contact.css';

const ContactInfo = () => {
    return (
        <div>
            <div className="service-container">
                <Container>
                    <Row>
                        <Col>
                            <h6 className="inner-page-tag">Send Message</h6>
                            <h3 className="inner-page-head">Drop us message for any query</h3>
                            <p className="inner-para">If you have an idea, we would love to hear about it.</p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} md={7}>
                        <Form>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Control placeholder="Your Name" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Your Email" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Phone" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Subject" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control as="textarea" rows={4} className="mt-4" />
                                    <Button variant="primary" className="mt-2">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                        </Col>
                        <Col xs={12} md={5}>
                           <h3 className="contact-head">Address</h3>
                           <p className="contact-para">CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada </p>
                           <h3 className="contact-head">Email</h3>
                           <p className="contact-para">example@email.com <br/> info@email.com</p>
                           <h3 className="contact-head">Phone</h3>
                           <p className="contact-para">+44 587 154756
<br/> +55 5555 14574</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ContactInfo;