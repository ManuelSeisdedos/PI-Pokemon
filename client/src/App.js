import "./App.css";
import { SinglePokemon } from "./components/SinglePokemon";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { LandingPage } from "./components/LandingPage";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/" component={NavBar} />
        </Switch>
        <Route path="/home" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
