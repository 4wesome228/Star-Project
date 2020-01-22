import React from "react";
import ItemDetails from "../item-details/item-details";
import Record from "../Record/record";
import SwapiService from "../../services/swapi-service";
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getStarshipImage,
  getPlanetImage
} = new SwapiService();

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye color" field="eyeColor" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record label="Population" field="population" />
      <Record label="Diameter" field="diameter" />
      <Record label="Rotation Period" field="rotationPeriod" />
    </ItemDetails>
  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
      <Record label="Сrew" field="crew" />
      <Record label="Passengers" field="passengers" />
      <Record label="Cargo capacity" field="cargoCapacity" />
      <Record label="Starship class" field="starshipClass" />
      <Record label="Mglt" field="mglt" />
      <Record label="Hyperdrative rating" field="hyperdriveRating" />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
