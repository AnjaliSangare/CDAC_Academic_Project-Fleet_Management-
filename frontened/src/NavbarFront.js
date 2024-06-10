import React from 'react';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import './Front.css';
// import { Searchbox } from './Searchbox';


export function NavbarFront() {
  return (
    <div className="App">
      <Header />

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="./">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"  >
              <Link className="nav-link" to="./Cancel">Modify Cancel Booking</Link>
              <Link className="nav-link" to="./RegistrationComponents/Registration">Membership Registration</Link>
              <Link className="nav-link" to="./AboutIndia">About IndiaDrive</Link>
              <Link className="nav-link" to="/CustomerCare">Customer Feedback</Link>
              <Link className="nav-link" to="/AboutUs">About Us</Link>
              <Link className="nav-link" to="./LoginComponent/Login">Login</Link>
              <Link className="nav-link" to="./Booking/MakeResevation">Start Booking</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </div>
  );
}