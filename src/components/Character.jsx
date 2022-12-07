import "./Character.css";
import { useFetch } from "../hooks/useFetch";

const Character = ({ character }) => {
  const { data, loading } = useFetch(character);
  return (
    <>
      {loading ? (
        ""
      ) : (
          <div className="project-card">
            <header className="project-card-pic">
              <img className="project-pic" src={data.image} alt="Proyecto 1" />
            </header>
            <div className="project-card-body">
              <h3 className="project-card-title">{data.name}</h3>
              <p className="project-card-text">{data.status}</p>
              <h3 className="project-card-title">Origin:</h3>
              <p className="project-card-text">{data.origin.name}</p>
            </div>
          </div>
      )}
    </>
  );
};

export default Character;
