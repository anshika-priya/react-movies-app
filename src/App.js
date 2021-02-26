import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Favourite } from "./components/Favourite";
import { Movieslist } from "./components/Movieslist";
import { Search } from "./components/Search";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
//import 'bootstrap/dist/css/bootstrap.min.css'

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Movieslist />
          </Route>
          <Route exact path="/movies">
            <Movieslist />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/favorite">
            <Favourite />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
