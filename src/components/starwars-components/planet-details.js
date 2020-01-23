import React from "react";
import ItemDetails from "../item-details/item-details";
import Record from "../Record/record";
import { swapiServiceHOC } from "../hoc-helpers/swapiServiceHOC";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record label="Population" field="population" />
      <Record label="Diameter" field="diameter" />
      <Record label="Rotation Period" field="rotationPeriod" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default swapiServiceHOC(PlanetDetails, mapMethodsToProps);
