import React from "react";
import Header from "../header/Header";
import ErrorBoundry from "../ErrorBoundry/errorBoundry";
import Row from "../Row/row";
import ItemDetails from "../item-details/item-details";
import Record from "../Record/record";
import SwapiService from "../../services/swapi-service";
import {
  PersonList,
  PlanetList,
  StarshipList
} from "../starwars-components/item-lists";

const App = () => {
  const swapiService = new SwapiService();

  const personDetails = (
    <ItemDetails
      itemId={3}
      getData={swapiService.getPerson}
      getImageUrl={swapiService.getPersonImage}
    >
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
    </ItemDetails>
  );

  const starshipDetails = (
    <ItemDetails
      itemId={5}
      getData={swapiService.getStarship}
      getImageUrl={swapiService.getStarshipImage}
    >
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
    </ItemDetails>
  );

  return (
    <ErrorBoundry>
      <div className="container">
        <Header />
        <PersonList
          onItemClicked={() => console.log("")}
          renderItem={({ name }) => `${name}`}
          selectedItemId={3}
        />
        <PlanetList
          onItemClicked={() => console.log("")}
          renderItem={({ name }) => `${name}`}
          selectedItemId={3}
        />
        <StarshipList
          onItemClicked={() => console.log("")}
          renderItem={({ name }) => `${name}`}
          selectedItemId={5}
        />
        <Row left={personDetails} right={starshipDetails} />
      </div>
    </ErrorBoundry>
  );
};

export default App;
