import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Character = ({ characters }) => {
  return (
    <>
      {characters.map((el) => (
        <Col key={el.id} xs={3} className="mt-4">
          <Card>
            <Card.Img variant="top" src={el.avatar} />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {el.status}
              </Card.Subtitle>
              <Card.Text>Planeta de Origen: {el.origin}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Character;
