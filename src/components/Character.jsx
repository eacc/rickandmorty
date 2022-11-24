import { useFetch } from "../hooks/useFetch";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Character = ({ character }) => {
  const { data, loading } = useFetch(character);
  return (
    <>
      {loading ? (
        ""
      ) : (
        <Col xs={6} md={3} className="mt-4">
          <Card>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {data.status}
              </Card.Subtitle>
              <Card.Text>Planeta de Origen: {data.origin.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default Character;
