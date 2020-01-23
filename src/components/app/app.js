import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import ErrorBoundry from "../ErrorBoundry/errorBoundry";
import RandomPLanet from "../random-planet/random-planet";
import Row from "../Row/row";
import {
  PersonList,
  PlanetList,
  StarshipList
} from "../starwars-components/item-lists";

import PersonDetails from "../starwars-components/person-details";
import StarshipDetails from "../starwars-components/starship-details";
import PlanetDetails from "../starwars-components/planet-details";

import { SwapiServiceProvider } from "../starwars-components/swapi-service-context";
import SwapiService from "../../services/swapi-service";

const App = () => {
  const [itemId, setItemId] = useState(2);
  const swapiService = new SwapiService();
  return (
    <Router>
      <div className="container">
        <SwapiServiceProvider value={swapiService}>
          <Header />
          <Switch>
            <Route
              path="/people"
              render={() => (
                <React.Fragment>
                  <PersonList
                    onItemClicked={id => setItemId(id)}
                    renderItem={({ name }) => `${name}`}
                    selectedItemId={itemId}
                  />
                  <PersonDetails itemId={itemId} />
                </React.Fragment>
              )}
            />

            <Route
              path="/planets"
              render={() => (
                <Row
                  left={
                    <PlanetList
                      onItemClicked={id => setItemId(id)}
                      renderItem={({ name }) => `${name}`}
                      selectedItemId={itemId}
                    />
                  }
                  right={<PlanetDetails itemId={itemId} />}
                />
              )}
            />
            <Route
              path="/starships"
              render={() => (
                <Row
                  left={
                    <StarshipList
                      onItemClicked={() => console.log("")}
                      renderItem={({ name }) => `${name}`}
                      selectedItemId={15}
                    />
                  }
                  right={<StarshipDetails itemId="15" />}
                />
              )}
            />
            <Route path="/" render={() => <RandomPLanet />} />
          </Switch>
        </SwapiServiceProvider>
      </div>
    </Router>
  );
};

export default App;
