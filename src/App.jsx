import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CharactersList from "./components/CharactersList";

function App() {
  return (
    <div className="App text-center">
      <h1>Rick and Morty App</h1>
      <CharactersList />
    </div>
  );
}

export default App;
