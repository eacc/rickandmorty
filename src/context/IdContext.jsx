import { createContext } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";

const idContext = createContext();
const IdProvider = ({ children }) => {
  const [id, setId] = useSessionStorage("id", 1);
  const data = {
    id,
    setId,
  };
  return <idContext.Provider value={data}>{children}</idContext.Provider>;
};

export { IdProvider };
export default idContext;
