import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Character from "./Character";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CharactersList = () => {
  const [id, setId] = useState(1);
  const [charactersEpisode, setCharactersEpisode] = useState([]);
  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/episode/${id}`
  );

  const handledNextEpisode = () => {
    setId(id + 1);
  };

  const handledPreviustEpisode = () => {
    setId(id - 1);
  };

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <Row>
            <Col
              xs={12}
              className="d-flex flex-row justify-content-center align-items-center"
            >
              {data.id === 1 ? (
                ""
              ) : (
                <button
                  type="button"
                  className="m-2 rounded"
                  onClick={handledPreviustEpisode}
                >
                  Anterior
                </button>
              )}
              <h2 className="m-2">
                Capitulo {data.id}: {data.name}
              </h2>

              <button
                type="button"
                className="m-2 rounded"
                onClick={handledNextEpisode}
              >
                Siguiente
              </button>
            </Col>
          </Row>
          <Row>
            <h2>Personajes</h2>
            {data.characters.map((element, i) => {
              return <Character key={i} character={element} />;
            })}
          </Row>
        </>
      )}
    </Container>
  );
};

export default CharactersList;
