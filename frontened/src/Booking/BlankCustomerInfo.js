import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

export default function BlankCustomerInfo() {

    const location = useLocation();
    const bookingInfo = location.state && location.state.user;
    const [error, setError] = useState(null);


    const[carData,setCarData]=useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/CarTypeMaster/getAllbyHubId/"+bookingInfo.setCheckHub)
       .then(res=>res.json())
       .then((result) => {setCarData(result)}
       )},[]);


       const[hubData,setHubData]=useState([]);

       useEffect(()=>{
        fetch("http://localhost:8080/hub/getHubByCityId/"+bookingInfo.setCheckHub)
        .then(response => response.json())
        .then(data => { setHubData(data)}
        )},[]);

       
    
  
    console.log("blank"+ bookingInfo.rentalDate);

    const [user,setUser]=useState({
        rentalDate: bookingInfo.rentalDate,
        returnDate: bookingInfo.returnDate ,
        setCheckHub: bookingInfo.setCheckHub,
        setCheckReturnHub: bookingInfo.setCheckReturnHub ,
        selectedCarTypeId: bookingInfo.selectedCarTypeId,
        selectedAddOns:[]
      });

      console.log("-----"+user);

    //   useEffect(() => {
    //     console.log("user values in blankcustomer", user.rentalDate,user.returnDate,user.setCheckHub,user.setCheckReturnHub,user.selectedCarTypeId,user.selectedAddOns);
    //   }, [user]);


    const [formData, setFormData] = useState({
        // address1: '',
        // address2: '',
        // city: '',
        // credit_card_type: '',
        // dl_issued_by: '',
        // dl_valid_through: '',
        // dob: '',
        // driving_licence: '',
        // email: '',
        // first_name: '',
        // last_name: '',
        // passport_issued_by: '',
        // passport_number: '',
        // passport_valid_upto: '',
        // phone: '',
        // pin: '',
        // state: '',
        // city_id: '',
        // state_id: ''
    });

    // useEffect(() => {
        
    //     // Fetch user data based on the logged-in user or customer ID
    //     // Example API call:
    //     // fetch(`api/userData/${loggedInUser}`)
    //     //   .then((response) => response.json())
    //     //   .then((data) => setFormData(data));

    //     // For demonstration purposes, let's assume the fetched data:
    //     const fetchedData = {
    //         //   address1: '123 Main Street',
    //         //   address2: 'Apt 456',
    //         //   city: 'Example City',
    //         //   credit_card_type: 'Visa',
    //         //   dl_issued_by: 'DMV',
    //         //   dl_valid_through: '2023-08-24T00:00:00',
    //         //   dob: '1990-01-15T00:00:00',
    //         //   driving_licence: 'DL123456',
    //         //   email: 'example@email.com',
    //         //   first_name: 'John',
    //         //   last_name: 'Doe',
    //         //   passport_issued_by: 'Passport Office',
    //         //   passport_number: 'P123456',
    //         //   passport_valid_upto: '2025-08-24T00:00:00',
    //         //   phone: '555-123-4567',
    //         //   pin: '12345',
    //         //   state: 'Example State',
    //         //   city_id: '1',
    //         //   state_id: '1'
    //     };



    //     setFormData(fetchedData);
    // }, []);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Submit form data (including login and password) to your server
    // };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });

        
    };

    console.log("in handleinput * "+ formData.username);

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

   
 const handleGoClick = async () => {
    const username = formData.username; // Capture the username from the form data
    try {
        const response = await fetch(`http://localhost:8080/customer/email/${username}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        //const userData = await response.json();
       
        setFormData(await response.json()); // Set the fetched user data in the formData state
        console.log("formdata "+ formData)
       // navigate('/CustomerInformation'); // Navigate to the "/CustomerInformation" route
    } catch (error) {
        setError(<strong>'You are not registered!! ' </strong>);//+ error.message);
        console.error('Error fetching user data:', error);
    }
};

console.log("final"+formData)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Capture the username from the form data
        //const username = formData.username;
        // Fetch user data based on the captured username
       // fetchUserData(username);
        //console.log("username is "+ username);
        console.log("succesfull");
    };


    return (
        <div>
            {/* <container >
                <h3>Rental Date: {user.rentalDate.toLocaleString()}</h3>
                <h3>Return Date: {user.returnDate.toLocaleString()}</h3>
                
                {/* <p>Car id: {user. selectedCarTypeId.toLocaleString()}</p> */}
                {/* <p align="center">
                    {carData.map(c=>(<tr key={c.carTypeId}>
                        
                            <img src={`CarType/${c.imagePath}.jpg`}
                            alt={c.carTypeName}
                            style={{ width: "120px", height: "120px" }}/>
                        
                        <h1 style={{ color: 'white', fontFamily: 'Arial', fontStyle: 'oblique',backgroundColor: 'grey', padding: '10px', borderRadius: '5px'  }}>{c.carTypeName}</h1>
                       
                    </tr>))}
                   
                </p>

    
<div>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
    <div style={{ marginRight: '100px' }}>
            <h2>Start Hub</h2>
        </div>
        <div>
            <h2>Return Hub</h2>
        </div>
    </div>
    
    <div  style={{ display: 'flex', justifyContent: 'space-between' }}>
        {hubData.map(c => (
            <div key={c.hubId} style={{ border: '1px solid black', padding: '10px', width: '48%' }}>
                <h3 style={{ fontSize: '20px' }}>Name: {c.hubName}</h3>
                <h3 style={{ fontSize: '20px' }}>State Name: {c.stateId.stateName}</h3>
                <h3 style={{ fontSize: '20px' }}>City Name: {c.cityId.cityName}</h3>
                <h3 style={{ fontSize: '20px' }}>Phone No: {c.hubPhoneNo}</h3>
                <h3 style={{ fontSize: '20px' }}>Time: {c.openingHours}</h3>
            </div>
        ))}
    </div>
</div>

            </container> */} 

<Container style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', backgroundColor: '#F5EDE4', color: '#4C3B36' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
            <h5>Rental Date: {user.rentalDate.toLocaleString()}</h5>
        </div>
        <div>
            <h5>Return Date: {user.returnDate.toLocaleString()}</h5>
        </div>
    </div>

    <div align="center" style={{ marginBottom: '20px' }}>
        {carData.map(c => (
            <div key={c.carTypeId} style={{ border: '1px solid #ccc', padding: '10px', width: '48%', borderRadius: '5px', backgroundColor: '#F0D9C6', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={`CarType/${c.imagePath}.jpg`} alt={c.carTypeName} style={{ width: "80px", height: "80px", marginRight: '10px' }} />
                    <h3 style={{ color: '#4C3B36', fontFamily: 'Arial', fontStyle: 'oblique', backgroundColor: '#D3B7A9', padding: '5px', borderRadius: '5px' }}>{c.carTypeName}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h5 style={{ color: '#4C3B36', backgroundColor: '#D3B7A9', padding: '5px', borderRadius: '5px', marginBottom: '5px' }}>Daily Rate: $ {c.dailyRate}, Weekly Rate: $ {c.weeklyRate}, Monthly Rate: ${c.monthRate}</h5>
                </div>
            </div>
        ))}
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {hubData.map(c => (
            <div key={c.hubId} style={{ border: '1px solid #ccc', padding: '10px', width: '48%', borderRadius: '5px', backgroundColor: '#F0D9C6', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '15px', margin: '0', color: '#4C3B36' }}>Name: {c.hubName}</h3>
                <h3 style={{ fontSize: '15px', margin: '0', color: '#4C3B36' }}>State Name: {c.stateId.stateName}</h3>
                <h3 style={{ fontSize: '15px', margin: '0', color: '#4C3B36' }}>City Name: {c.cityId.cityName}</h3>
                <h3 style={{ fontSize: '15px', margin: '0', color: '#4C3B36' }}>Phone No: {c.hubPhoneNo}</h3>
                <h3 style={{ fontSize: '15px', margin: '0', color: '#4C3B36' }}>Time: {c.openingHours}</h3>
            </div>
        ))}
    </div>
</Container>







            
        <Container>
            <h2>Customer Profile Form</h2>

            {error && (
                    <div style={{ color: 'red', marginBottom: '10px' }}>
                        {error}
                    </div>
                )}
            <Form onSubmit={handleSubmit}>
            <div style={{ border: '10px solid #ccc', padding: '10px' }}>
                <Row>
                    <Col>
                        <Form.Group controlId="username">
                            <Form.Label>Membership username:</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}


                            />
                       <div style={{ paddingTop: '10px', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                <Button  onClick={handleGoClick}  variant="primary" type="submit" style={{ backgroundColor: 'grey', color: 'white', width: '25%' }}>
                    {/* <Link to="/CustomerInformation" style={{ color: 'white', textDecoration: 'none' }}>Go</Link> */}Submit
                </Button>
            </div>
                        </Form.Group>

                    </Col>
                    
                    <Col>
                        <Form.Group controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                </div>
                <Row>
                    <Col>
                        <Form.Group controlId="address1">
                            <Form.Label>Address 1:</Form.Label>
                            <Form.Control
                                type="text"
                                name="address1"
                                value={formData.address1}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="address2">
                            <Form.Label>Address 2:</Form.Label>
                            <Form.Control
                                type="text"
                                name="address2"
                                value={formData.address2}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <Form.Group controlId="city">
                            <Form.Label>City:</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.cityId}

                            />
                        </Form.Group> */}
                    </Col>
                    <Col>
                        {/* <Form.Group controlId="creditCardType">
                            <Form.Label>Credit Card Type:</Form.Label>
                            <Form.Control
                                type="text"
                                name="credit_card_type"
                                value={formData.creditCardType}

                            />
                        </Form.Group> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="dlIssuedBy">
                            <Form.Label>DL Issued By:</Form.Label>
                            <Form.Control
                                type="text"
                                name="dl_issued_by"
                                value={formData.dlIssuedBy}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="dlValidThrough">
                            <Form.Label>DL Valid Through:</Form.Label>
                            <Form.Control
                                //type="datetime-local"
                                type="text"
                                name="dl_valid_through"
                                value={formData.dlValidThrough }

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="dob">
                            <Form.Label>Date of Birth:</Form.Label>
                            <Form.Control
                               //type="datetime-local"
                               type="text"
                                name="dob"
                                value={formData.dob}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="drivingLicence">
                            <Form.Label>Driving Licence:</Form.Label>
                            <Form.Control
                                type="text"
                                name="driving_licence"
                                value={formData.drivingLicence}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="first_name"
                                value={formData.firstName}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="last_name"
                                value={formData.lastName}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="passportIssuedBy">
                            <Form.Label>Passport Issued By:</Form.Label>
                            <Form.Control
                                type="text"
                                name="passport_issued_by"
                                value={formData.passportIssuedBy}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="passportNumber">
                            <Form.Label>Passport Number:</Form.Label>
                            <Form.Control
                                type="text"
                                name="passport_number"
                                value={formData.passportNumber}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="passportValidUpto">
                            <Form.Label>Passport Valid Upto:</Form.Label>
                            <Form.Control
                                //type="datetime-local"
                                type="text"
                                name="passport_valid_upto"
                                value={formData.passportValidUpto}
                                readOnl
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={formData.phone}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="pin">
                            <Form.Label>PIN:</Form.Label>
                            <Form.Control
                                type="text"
                                name="pin"
                                value={formData.pin}

                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <Form.Group controlId="state">
                            <Form.Label>State:</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={formData.state}

                            />
                        </Form.Group> */}
                    </Col>
                    {/* <Col>
                        <Form.Group controlId="cityId">
                            <Form.Label>City ID:</Form.Label>
                            <Form.Control
                                type="text"
                                name="city_id"
                                value={formData.city_id}

                            />
                        </Form.Group>
                    </Col> */}
                </Row>
                <Row>
                    {/* <Col>
                        <Form.Group controlId="stateId">
                            <Form.Label>State ID:</Form.Label>
                            <Form.Control
                                type="text"
                                name="state_id"
                                value={formData.state_id}

                            />
                        </Form.Group>
                    </Col> */}
                </Row>
                <Button variant="dark" type="submit">
                    <Link to="/ConfirmBooking">Confirm Booking</Link>
                </Button>
            </Form>
        </Container>

        </div>
    );
}