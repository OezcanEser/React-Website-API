import './App.css';
import Home from "./Page/Home";
import AllBeers from "./Page/AllBeers";
import Beer from "./Page/Beer"
import RandomBeer from "./Page/RandomBeer"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/beers/random" component={RandomBeer} />
          <Route path="/beers/:beerId" component={Beer} />
          <Route path="/AllBeers" component={AllBeers} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
