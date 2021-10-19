import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LoginBanner from './LoginBanner';

const Login = () => {

    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_Uri = location.state?.from || '/service';

    const handleLogin =() =>{
        signInWithGoogle()
        .then(result => {
            history.push(redirect_Uri)
        })
    }

    
    return (
        <div>
            <LoginBanner></LoginBanner>
            <div className="service-container">
                <Container>
                    <Row className="mt-5">
                    <Col xs={12} md={4}>
                    </Col>
                    <Col xs={12} md={4}>
                    <h2>Login With Google</h2>
                    <button onClick={handleLogin} className="btn btn-warning fw-bold">Google Login</button>
                    </Col>
                    
                    </Row>
                </Container>
            </div>
            
        </div>
    );
};

export default Login;