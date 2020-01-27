import React, { useState } from "react";
import { StarshipList } from "../starwars-components/item-lists";
import Row from "../Row/row";
import StarshipDetails from "../starwars-components/starship-details";

export default () => {
  const [starshipId, setStarshipId] = useState(15);
  return (
    <Row
      left={
        <StarshipList
          onItemClicked={() => console.log("")}
          renderItem={({ name }) => `${name}`}
          selectedItemId={9}
        />
      }
      right={<StarshipDetails itemId="9" />}
    />
  );
};
