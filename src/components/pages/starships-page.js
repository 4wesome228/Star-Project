import React, { useState } from "react";
import { StarshipList } from "../starwars-components/item-lists";
import Row from "../Row/row";
import StarshipDetails from "../starwars-components/starship-details";

export default () => {
  return (
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
  );
};
