import "./App.css";
import { SinglePokemon } from "./components/SinglePokemon/SinglePokemon";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { NavBar } from "./components/NavBar/NavBar";
import { PokemonForm } from "./components/PokemonForm/PokemonForm";
import s from "./App.module.css";
import Delete from "./components/Delete/Delete";

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
          <Route path="/delete" component={Delete} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
