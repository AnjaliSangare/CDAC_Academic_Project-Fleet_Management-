import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';



export function Header1() {
  return (
    <Navbar  expand="lg"  className="bg-body-tertiary">
      
      <Container >
       <img src="Images/home.png" id="h1"  class="img-rounded" ></img> 
      <Link to="./Home">Home</Link> 
      <Link to="./Cancel">ModifyCancelBooking</Link> 
        <Link to="./RegistrationComponents/Registration">Membership Registration</Link> 
        <Link to="./AboutIndia">AboutIndiaDrive</Link> 
        <Link to="/CustomerCare">Customer Care</Link> 
        <Link to="/AboutUs">About Us</Link> 
        <Link to="./Login">Login</Link> 
      </Container>
     {/* <div id="a1">
     <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/Contact Us">Contact Us</Nav.Link>
        <Nav.Link href="/Address">Address</Nav.Link>
        <Nav.Link href="/Booking ">Booking </Nav.Link>
        <Nav.Link href="/Booking ">CarType </Nav.Link>

        <Nav.Link href="/About us">About us</Nav.Link> */}
        
     {/* </div> */}
    <Outlet/>
    </Navbar>
    
  );
}

