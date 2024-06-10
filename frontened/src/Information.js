import Card from 'react-bootstrap/Card';

export function Information() {
  return (
    <>
      <Card border="BLACK" style={{ width: '20rem'}} >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>COMPANY INFORMATION</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
     

          </>
  );
}

