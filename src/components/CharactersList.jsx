import { useContext } from "react";
import Character from "./Character";
import apiContext from "../context/ApiContext";
import "./CharacterList.css";

const CharactersList = () => {
  const { data, loading } = useContext(apiContext);
  return (
    <>
      {loading ? (
        ""
      ) : (
        <>
          <h2 className="character-title">Characters</h2>
          <div className="character-container">
            {data.characters.map((character) => (
              <Character key={character} character={character} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CharactersList;
