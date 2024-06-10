import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function Header() {
  return (
    <Navbar  expand="lg"  className="bg-body-tertiary">
      <Container>
        
      <img src="/Images/image2.jpg" id="i"  class="img-rounded" alt="car_image"></img>
        <Navbar.Brand href="/home"  >RENTALS CARS</Navbar.Brand>
        
        <Navbar.Brand href="/home"  id="a" > BANNER AREA – Search, Compare & Save</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand id="p" href="/home">BooK on-line or call-8928913606</Navbar.Brand> 
        </Navbar.Collapse>       
      
      </Container>
      
      
     
    
    </Navbar>
    
  );
}

