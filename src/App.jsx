import { Switch, Link, Route } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "./context/poke-context";
import { PokemonProvider } from "./context/poke-context";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  // => extract the data from PokemonContext and passed it to provider value as a prop
  const data = useContext(PokemonContext);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <PokemonProvider value={data}>
        <Route exact path="/pokemon" component={Pokemon} />
        <Route path="/pokemon/:pokemonId" component={PokemonDetails} />
      </PokemonProvider>
    </Switch>
  );
}
export default App;
