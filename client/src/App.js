import "./App.css";
import { SinglePokemon } from "./components/SinglePokemon";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { LandingPage } from "./components/LandingPage";
import { NavBar } from "./components/NavBar";
import { PokemonForm } from "./components/PokemonForm";
import s from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={s.back}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <div>
            <Route path="/" component={NavBar} />
          </div>
        </Switch>
        <div id={s.principal}>
          <Route exact path="/home" component={Home} />
          <Route path="/create" component={PokemonForm} />
          <Route path="/pokemon/:id" component={SinglePokemon} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
