import "./App.css";
import Home from "./components/Home";
import { LandingPage } from "./components/LandingPage";
import { SinglePokemon } from "./components/SinglePokemon";
import { BrowseRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowseRouter>
      <div className="App">
        <SinglePokemon />
      </div>
    </BrowseRouter>
  );
}

export default App;
