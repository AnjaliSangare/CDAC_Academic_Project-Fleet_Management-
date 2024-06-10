import Carousel from 'react-bootstrap/Carousel';

export function Image() {
  return (
    <Carousel data-bs-theme="dark " id="a3" >
      
      <Carousel.Item id="img">
        <img
          className="d-block w-100"
          src="/Images/himg1.jpg"
        
          alt="Second slide"
          
        />
        
      </Carousel.Item>
      <Carousel.Item  id="img1">
        <img
          className="d-block w-100"
          src="/Images/himg2.jpg"
          alt="Third slide"
         
        />
        
      </Carousel.Item>
      
      <Carousel.Item id="img3">
        <img
          className="d-block w-100"
          src="/Images/himg3.jpg"
          alt="First slide"
        
        />
        
        
      </Carousel.Item>
    </Carousel>
  );
}

