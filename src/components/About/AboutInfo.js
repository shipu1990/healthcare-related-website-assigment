import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import aboutimg from '../../images/about-img1.jpg';

const AboutInfo = () => {
    const [doctores, setDoctores] = useState([]);
    //console.log(service);

    useEffect(()=>{
        fetch('./doctor.JSON')
        .then(res => res.json())
        .then(data => setDoctores(data))
    } ,[])
    return (
        <div>
            <div className="service-container">
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                       <Image src={aboutimg} fluid />
                    </Col>
                    <Col xs={12} md={6}>
                        <h6 className="about-tag">About Us</h6>
                        <h3 className="about-head">Short Story About Darma HealthCare Since 1999</h3>
                        <p className="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <ul className="about-list">
                            <li>Scientific Skills For getting a better result</li>
                            <li>Communication Skills to getting in touch</li>
                            <li>A Career Overview opportunity Available</li>
                            <li>A good Work Environment For work</li>
                            <li>Scientific Skills For getting a better result</li>
                            <li>Communication Skills to getting in touch</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container>
            <Row>
                <Col>
                    <h6 className="inner-page-tag mt-5">Our Doctors</h6>
                    <h3 className="inner-page-head">Our Healthcare Services</h3>
                    <p className="inner-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
                <Row>
                        {
                        doctores.slice(0, 6).map(doctor =><Col xs={12} md={4} key={doctor.id}>
                        <div className="service-box">
                            <Image src={doctor.img} fluid roundedCircle  />
                            <h2 className="service-head text-center">{doctor.name}</h2>
                            <p className="service-para text-center">{doctor.specialist}</p>
                        </div>
                        </Col>) 
                        }
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default AboutInfo;