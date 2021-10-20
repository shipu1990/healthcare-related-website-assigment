import React, { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LoginBanner from './LoginBanner';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState({})

    const {signInWithGoogle, createUserWithEmailAndPassword,auth, signInWithEmailAndPassword, updateProfile} = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_Uri = location.state?.from || '/service';
    // console.log(email, name, password);


    const handleLogin =() =>{
        signInWithGoogle()
        .then(result => {
            history.push(redirect_Uri)
        })
    }


    const handleManualRegistration = e =>{
        e.preventDefault()
        if (password.length < 6){
            setError('Password Must Contain 6 Latter Long')
            return;
          }
          isLogin? userRegister(email, password): processLogin(email,password)
        
    }
    const userNameAdd = () =>{ 
        updateProfile(auth.currentUser, {displayName: name} )
        .then(result =>{
         
        })
      }
   
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          setUser(user);
          setError('');
          history.push(redirect_Uri)
        })
        .catch(error =>{
          setError(error.message);
        })
    }
    const userRegister = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
        const user = result.user;
        setUser(user);
        setError('');
        userNameAdd();
        history.push(redirect_Uri)
        })
        .catch(error =>{
            setError(error.message);
        })
        
    }

    const toggleLogin = e =>{
        setIsLogin(e.target.checked);
      }
      const handleEmailChange = e =>{
        setEmail(e.target.value);
      }
      const handlePassword = e =>{
        setPassword(e.target.value);
      }
      const handleName = e =>{
        setName (e.target.value);
      } 
    return (
        <div>
            <LoginBanner></LoginBanner>
            <div className="service-container">
                <Container>
                    <Row>
                        <Col xs={12} md={4}></Col>
                        <Col xs={12} md={4}>
                        
                        <form onSubmit={handleManualRegistration} className="bg-white p-4">
                            <h2>Please {isLogin ? 'Register ': 'Login'}</h2>
                            { isLogin && <div className="mb-3">
                            <label className="form-label d-block">Your Name</label>
                                <input onBlur={handleName} type="text" className="form-control" placeholder="Name" />
                            </div> 
                            }

                            <div className="mb-3">
                                <label className="form-label d-block">Email address</label>
                                <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label d-block">Password</label>
                                <input onBlur={handlePassword} type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input onChange={toggleLogin} type="checkbox" className="form-check-input" />
                                <label className="form-check-label d-block text-left" >{isLogin ? 'Already Registered? ': 'Have Not Registered Yet? '}</label>
                            </div>
                            <div className="mb-3">
                                <label className="form-label d-block"> {error}</label>
                            </div>
                            <button type="submit" className="btn btn-primary"> {isLogin ? 'Register ': 'Login'}</button>
                         </form>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                    <Col xs={12} md={4}></Col>
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