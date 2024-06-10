import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userData, setUserData] = useState(null); // Initialize userData state
  const[loginUser,setLoginUser]=useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // This effect will run whenever userData changes
    if (userData) {
      console.log('Updated User Data:', userData);
    }
  }, [userData]); // Only run the effect when userData changes

  const handleSubmit = (e) => {
    e.preventDefault();


    // Reset previous errors
    setEmailError('');
    setPasswordError('');

    // Validate fields
    let valid = true;
    if (email.trim() === '') {
      setEmailError('Email is required');
      valid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      valid = false;
    }

    if (valid) {
      // Create JSON object
      const newUser = {
        email: email,
        password: password,
      };

      // Set userData state with the new JSON object
      setUserData(newUser);
      // Now you can use the userData object as needed, such as sending it to an API
      // or displaying it in your application.

      // Clear form fields
      setEmail('');
      setPassword('');

      navigate('/AfterLogin');
    }
  };

  return (
   
<>
<br></br>


<h2>Login Here</h2>

    <div className="Login_form" > {/* Wrap the form in a centered container */}
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
          <Form.Label id="r" column sm={3}> Email</Form.Label>
          <Col sm={{ span: 10, offset:0.8 }}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error">{emailError}</div>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-2" controlId="formHorizontalPassword">
          <Form.Label column sm={4}>
            Password
          </Form.Label>
          <Col sm={{ span: 10, offset: 0.8 }}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-1" controlId="formHorizontalCheck">
          <Col sm={{ span: 8, offset: 0.5 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 8, offset: 0.5 }}>
            <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 5, offset: 0.5 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
   
    </>
   
  );
}

export default Login;