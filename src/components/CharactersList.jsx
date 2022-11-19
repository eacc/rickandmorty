import { useState, useEffect } from "react";
import Character from "./Character";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const CharactersList = () => {
  const [id, setId] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [charactersEpisode, setCharactersEpisode] = useState([]);

  const handledNextEpisode = () =>{
    setId(id + 1)
  }

  const handledPreviustEpisode = () =>{
    setId(id - 1)
  }

  useEffect(() => {

    setCharactersEpisode([])
    const getCharacters = async (url) => {
      let res = await fetch(url),
        data = await res.json();

      setEpisodes(data);
      data.characters.forEach(async (el) => {
        let res = await fetch(el),
          data = await res.json();

        let character = {
          id: data.id,
          name: data.name,
          status: data.status,
          origin: data.origin.name,
          avatar: data.image,
        };

        setCharactersEpisode((charactersEpisode) => [
          ...charactersEpisode,
          character,
        ]);
      });
    };

    getCharacters(`https://rickandmortyapi.com/api/episode/${id}`);
  }, [id]);

  console.log(charactersEpisode);
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center"
        >
          {episodes.id > 1 ? (
            <button className="m-2 rounded" onClick={handledPreviustEpisode} >
              Anterior
            </button>
          ) : (
            ""
          )}
          <h2 className="m-2">Capitulo {episodes.id}: {episodes.name}</h2>
          <button type="button" className="m-2 rounded" onClick={handledNextEpisode }>
            Siguiente
          </button>
        </Col>
      </Row>
      <h2>Personajes</h2>
      <Row>
        <Character characters={charactersEpisode} />
      </Row>
    </Container>
  );
};

export default CharactersList;
