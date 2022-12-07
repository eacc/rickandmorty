import { createContext, useContext } from "react";
import idContext from "../context/IdContext";
import { useFetch } from "../hooks/useFetch";

const apiContext = createContext();
const ApiProvider = ({ children }) => {
  const { id } = useContext(idContext);
  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/episode/${id}`
  );

  const dataApi = {
    data,
    loading,
  };
  return <apiContext.Provider value={dataApi}>{children}</apiContext.Provider>;
};

export { ApiProvider };
export default apiContext;
