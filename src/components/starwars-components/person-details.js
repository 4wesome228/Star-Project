import React from "react";
import ItemDetails from "../item-details/item-details";
import Record from "../Record/record";
import { swapiServiceHOC } from "../hoc-helpers/swapiServiceHOC";

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye color" field="eyeColor" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};

export default swapiServiceHOC(PersonDetails, mapMethodsToProps);
