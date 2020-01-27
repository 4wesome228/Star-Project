import React from "react";
import ItemDetails from "../item-details/item-details";
import Record from "../Record/record";
import { swapiServiceHOC } from "../hoc-helpers/swapiServiceHOC";

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
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

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};

export default swapiServiceHOC(StarshipDetails, mapMethodsToProps);
