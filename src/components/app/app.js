import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { SwapiServiceProvider } from "../starwars-components/swapi-service-context";
import Header from "../header/Header";
import ErrorBoundry from "../ErrorBoundry/errorBoundry";
import RandomPLanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsDetails from "../starwars-components/starship-details";
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
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route exact path="/starships" e component={StarshipsPage} />
              <Route
                exact
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipsDetails itemId={id} />;
                }}
              />
              <Route path="/" render={() => <RandomPLanet />} />
            </Switch>
          </SwapiServiceProvider>
        </div>
      </Router>
    </ErrorBoundry>
  );
};

export default App;
