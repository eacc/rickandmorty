import React from "react";
import Header from "./components/Header";
import CharactersList from "./components/CharactersList";
import ButtonUp from "./components/ButtonUp";
import { ApiProvider } from "./context/ApiContext";
import { IdProvider } from "./context/IdContext";

function App() {
  return (
    <>
      <IdProvider>
        <ApiProvider>
          <Header />
          <CharactersList />
          <ButtonUp />
        </ApiProvider>
      </IdProvider>
    </>
  );
}

export default App;
