import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import './Registration.css'; 
import Dropdown from 'react-bootstrap/Dropdown';
import 'react-phone-number-input/style.css';
import { useNavigate } from 'react-router-dom';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

export function Registration() 
{

 // const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in the format "YYYY-MM-DD";

  let navigate=useNavigate();


  const [passwordError, setPasswordError] = useState('');


  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: '',
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  
  const [validated, setValidated] = useState(false);

  const[user,setUser]=useState('');


//   const handleChange=(event)=>{
//     const name=event.target.name;
//     const value=event.target.value;
//     setUser(values=>({...user,[name]:value}))
// }

const handleChange = (event) => {

  

  const { name, value } = event.target;
  setUser((prevUser) => ({ ...prevUser, [name]: value }));


  //regex validations
  switch (name) {
    case 'password':
      if (!passwordRegex.test(value)) 
      {
        // Handle invalid password
        validatePassword(value); // Validate password criteria

      }
      break;
      default:
        break;
    }

 // Update passwords and check if they match
  if (name === 'password' || name === 'confirmPassword') 
  {
    setPasswords((prevPasswords) => ({ ...prevPasswords, [name]: value }));
    if (name === 'confirmPassword' && passwords.password !== value) {
      setPasswordsMatch(false);
    } else if (name === 'password' && passwords.confirmPassword !== value) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  }

  if (name === 'dlValidThrough' || name === 'passportValidUpto' || name === 'dob') {
    // Convert date string to Date object
    const dateValue = new Date(value);
    if (!isNaN(dateValue)) {
      // Format date as yyyy-MM-dd
      const formattedDate = dateValue.toISOString().split('T')[0];
      setUser((prevUser) => ({ ...prevUser, [name]: formattedDate }));
    }
  }
};

const validatePassword = (password) => {
  if (password.length < 8) {
    setPasswordError('Password should be at least 8 characters long.');
  } else if (password.length > 15) {
    setPasswordError('Password should not exceed 15 characters.');
  } else if (!passwordRegex.test(password)) {
    setPasswordError('Password must contain letters and numbers and not special characters like ,!,@,#,*,%');
  } else {
    setPasswordError('');
  }
};

  const handleSubmit = (event) => {

    event.preventDefault();
   event.stopPropagation();

    const form = event.currentTarget;

    let hasEmptyFields = false;

    const requiredFields = [
      'firstName', 'lastName', 'address1', 'address2',
      'city', 'state', 'pin', 'drivingLicence', 'dlIssuedBy',
      'dlValidThrough', 'passportNumber', 'passportIssuedBy',
      'passportValidUpto', 'dob', 'phone', 'email'
    ];

    requiredFields.forEach(fieldName => {
      if (!user[fieldName]) {
        hasEmptyFields = true;
      }
    });
  
//if (form.checkValidity() === false|| !passwordsMatch || passwordError ||hasEmptyFields) 
    if (form.checkValidity() === false|| !passwordsMatch  ||hasEmptyFields) {
      // event.preventDefault();
      // event.stopPropagation();
      setValidated(true);    
      
      console.log("Form submission blocked due to validation errors.");
    }else{

    
    
    setValidated(false);

    console.log(user);

    let demo=JSON.stringify(user);

    fetch("http://localhost:8080/customer/addcustomer",
    {method:'POST',
     headers:{'Content-type':'application/json'},
     body: demo})
 .then(r=>console.log('Data added successfully in customer master:', r));

//  fetch("http://localhost:8080/register/",
//  {method:'POST',
//   headers:{'Content-type':'application/json'},
//   body: demo})
// .then(r=>console.log('Data added successfully in registration:', r));

 
 navigate('/LoginComponent/Login');
 //event.preventDefault();
  };
}

  return (
    <>
    <br></br>
    <div id="reg">
     <h2>Register Here</h2>
    <div className="Registration_form-container" id="reg1">
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="border-form">
  
      <Row className="mb-3 justify-content-center" >
        <Form.Group as={Col} md="6" controlId="validationCustom01" >
        <Form.Label >First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" /*defaultValue="Shruti"*/ name="firstName" onChange={handleChange}/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Last name" name="lastName" onChange={handleChange} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>   
      </Row>
     
      <Row className="mb-3 justify-content-center" >
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Address-1</Form.Label>
          <Form.Control required type="text" placeholder="Street no,Area" name="address1" onChange={handleChange} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
     

   
      <Form.Group as={Col} md="6" controlId="validationCustom01">
      <Form.Label>Address-2</Form.Label>
      <Form.Control required type="text"  placeholder="Identical mark" name="address2" onChange={handleChange}/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  </Row>

  <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required name="city" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid"> Please provide a valid city.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required name="state" onChange={handleChange} />
          <Form.Control.Feedback type="invalid">Please provide a valid state. </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required name="pin" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
        </Form.Group>
    </Row>

    <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Driving License</Form.Label>
          <Form.Control type="text" placeholder="Driving License" required name="drivingLicence" onChange={handleChange} />
          <Form.Control.Feedback type="invalid"> Please provide a valid Driving License.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Issued By</Form.Label>
          <Form.Control type="text" placeholder="Issued By" required name="dlIssuedBy" onChange={handleChange} />
          <Form.Control.Feedback type="invalid"> Please provide a valid Date.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Valid thru</Form.Label>
          <Form.Control type="date" placeholder="Valid thru" required  name="dlValidThrough" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">Please provide a valid Date.</Form.Control.Feedback>
        </Form.Group>
    </Row>

   <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Passport No</Form.Label>
          <Form.Control type="text" placeholder="Passport No" required name="passportNumber" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Passport No.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Issued By</Form.Label>
          <Form.Control type="text" placeholder="Issued By" required name="passportIssuedBy" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Valid thru</Form.Label>
          <Form.Control type="date" placeholder="Valid thru" required name="passportValidUpto" onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
    </Row>

     <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="4" controlId="validationCustom05">
             <Form.Label>Date of Birth</Form.Label>
             <Form.Control type="date"  placeholder="Date of Birth" required name="dob" onChange={handleChange} />
       </Form.Group>
      
      <Form.Group as={Col} md="4" controlId="validationCustom05">
             <Form.Label>Mobile number</Form.Label>
             <Form.Control type="tel" maxLength="10" placeholder="Mobile number" required name="phone" onChange={handleChange} />
       </Form.Group> 
    
       

    <Form.Group as={Col} md="4" controlId="validationCustom05">
    <Form.Label>Select Car Type</Form.Label>
    <Dropdown data-bs-theme="light">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary"> Select car Type</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Small Car</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Sedan</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Suzuki</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>  
  </Row>
<hr>
</hr>
  <Row className="mb-3 justify-content-center" >
        <Form.Group as={Col} md="10" controlId="validationCustom01">
          <Form.Label>Email Id</Form.Label>
          <Form.Control required type="email" placeholder="name@example.com" name="email" onChange={handleChange} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

  <Row className="mb-3 justify-content-center">
    <Form.Group as={Col} md="5" controlId="validationCustom05">
      <Form.Label>Enter password</Form.Label>
       <Form.Control type="password" name="password" aria-describedby="passwordHelpBlock" onChange={handleChange} required isInvalid={passwordError !== ''}/>
       <Form.Control.Feedback type="invalid">
       {passwordError || (
          <div>
            Your password must be 8-15 characters long, contain letters and numbers and must not contain spaces, special characters, or emoji.
            </div>
        )}
      </Form.Control.Feedback>
         
         {/* <Form.Text id="passwordHelpBlock" muted>
           Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
      </Form.Text> */}
      </Form.Group>

      <Form.Group as={Col} md="5" controlId="validationCustom05">
               <Form.Label>Confirm password</Form.Label>
              <Form.Control type="password" name="confirmPassword" aria-describedby="passwordHelpBlock" onChange={handleChange} required />

              {!passwordsMatch && (<div className="invalid-feedback">Passwords do not match.</div> )}
              {!passwordsMatch && (<div className="text-danger">Passwords do not match. Please re-enter your passwords.</div>)}
      </Form.Group>
      
  </Row>
      <br></br>
      

      {/* <input type="Submit" value="Submit"  disabled={!passwordsMatch}/>
      <input type="button" value="clear"/> */}

<Row className="mb-3 justify-content-center">
  <Col md={{ span: 3.3, offset: 3.5 }}>
    <input type="submit" value="Submit" className="btn custom-submit-btn mr-2" disabled={!passwordsMatch} />
    <input type="button" value="Clear" className="btn custom-clear-btn" />
  </Col>
</Row>

    
    </Form>
    </div>
    </div>
    </>
  );
}