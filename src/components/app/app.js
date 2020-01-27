import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SwapiServiceProvider } from "../starwars-components/swapi-service-context";
import Header from "../header/Header";
import ErrorBoundry from "../ErrorBoundry/errorBoundry";
import RandomPLanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";

const App = () => {
  const swapiService = new SwapiService();
  return (
    <ErrorBoundry>
      <Router>
        <div className="container">
          <SwapiServiceProvider value={swapiService}>
            <Header />
            <Switch>
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} />
              <Route path="/" render={() => <RandomPLanet />} />
            </Switch>
          </SwapiServiceProvider>
        </div>
      </Router>
    </ErrorBoundry>
  );
};

export default App;
