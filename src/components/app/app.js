import React from "react";
import Header from "../header/Header";
import RandomPlanet from "../random-planet/random-planet";

import PeoplePage from "../people-page/people-page";
import ErrorBoundry from "../ErrorBoundry/errorBoundry";
import Row from "../Row/row";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

const App = () => {
  const swapiService = new SwapiService();

  const personDetails = (
    <ItemDetails
      itemId={5}
      getData={swapiService.getPerson}
      getImageUrl={swapiService.getPersonImage}
    />
  );
  const starshipDetails = (
    <ItemDetails
      itemId={5}
      getData={swapiService.getStarship}
      getImageUrl={swapiService.getStarshipImage}
    />
  );
  return (
    <ErrorBoundry>
      <div className="container">
        <Header />
        <Row left={personDetails} right={starshipDetails} />
      </div>
    </ErrorBoundry>
  );
};
//<PeoplePage />  <RandomPlanet />

export default App;
