import React from 'react';
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import './Header.css';
import Logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <div className="header-top"></div>

            <Container className="mt-2">
                <Row>
                    <Col sm={5}>
                        <img className="logo" src={Logo} alt="Logo" />
                    </Col>
                    <Col sm={7}>
                        <Nav className="mt-4">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/service">Services</Link>
                            <Link to="/contact">Contact Us</Link>
                            {user?.email?
                            <Button onClick={logOut} variant="light">LogOut</Button>:
                            <Nav.Link as={Link} to="/login">Login </Nav.Link>
                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;