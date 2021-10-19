import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const ServiceInfo = () => {
    const [services, setServices] = useState([]);
    //console.log(service);

    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div>
            <div className="service-container">
                <Container>
                    <Row>
                        <Col>
                            <h6 className="inner-page-tag">Our Service</h6>
                            <h3 className="inner-page-head">Our Healthcare Services</h3>
                            <p className="inner-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Col>
                    </Row>
                    <Row>
                    {
                    services.map(service =><Col xs={12} md={4} key={service.id}>
                      <div className="service-box">
                        <Image src={service.img} fluid />
                        <h2 className="service-head">{service.name}</h2>
                        <p className="service-para">{service.description}</p>
                        <p className="service-price"> Service Fee : {service.fees}</p>
                    </div>
                    </Col>) 
                    }
                    </Row>
                </Container>
                </div>
        </div>
    );
};

export default ServiceInfo;