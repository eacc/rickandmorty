import "./Header.css";
import { useContext } from "react";
import idContext from "../context/IdContext";
import apiContext from "../context/ApiContext";

const Header = () => {
  const { id, setId } = useContext(idContext);
  const { data, loading } = useContext(apiContext);

  const handledNextEpisode = () => {
    setId(id + 1);
  };

  const handledPreviousEpisode = () => {
    setId(id - 1);
  };

  return (
    <div className="header-container">
      <h1 className="header-title">Rick and Morty App</h1>
      <div className="header-body">
        {id === 1 ? (
          <button
            className="button"
            type="button"
            onClick={handledPreviousEpisode}
            disabled
          >
            &#8249; Previous
          </button>
        ) : (
          <button
            className="button"
            type="button"
            onClick={handledPreviousEpisode}
          >
            &#8249; Previous
          </button>
        )}
        {loading ? (
          ""
        ) : (
          <div className="episode-title">
            <h2>Episode {id}</h2>
            <h3>{data.name}</h3>
          </div>
        )}

        <button className="button" type="button" onClick={handledNextEpisode}>
          Next &#8250;
        </button>
      </div>
    </div>
  );
};

export default Header;
