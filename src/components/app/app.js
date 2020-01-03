import React from "react";
import Header from "../header/Header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import { Switch, Route, Router } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={RandomPlanet}></Route>
        <Route path="/item" component={ItemList}></Route>
        <Route path="/personDetails" component={PersonDetails}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
