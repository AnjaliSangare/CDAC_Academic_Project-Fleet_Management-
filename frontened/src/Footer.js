import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Footer() {
  return (
    <footer className="bg-dark text-light mt-4"> {/* Added mt-5 for top margin */}
      <Container fluid>
        <Row className="py-2">
          <Col xs={12} md={4} className="mb-4">
            <h5>About Us</h5>
            <p>Your Company Description Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="/Career/">Career</a></li>
              <li><a href="/Service/">Services</a></li>
              <li><a href="https://www.trivago.in/">Affiliated Hotels</a></li>
              <li><a href="https://www.tomorrow.io/weather/">Weather</a></li>
              <li><a href="https://www.google.com/maps/@19.1159397,72.8383585,15z?entry=ttu">Site Map</a></li>
            </ul>

          </Col>
          <Col xs={8} md={4} className="mb-4">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123-456-7890</p>
          </Col>
        </Row>
        <hr />
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}