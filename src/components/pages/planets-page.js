import React, { useState } from "react";
import { PlanetList } from "../starwars-components/item-lists";
import Row from "../Row/row";
import PlanetDetails from "../starwars-components/planet-details";

export default () => {
  const [itemId, setItemId] = useState(2);
  return (
    <Row
      left={
        <PlanetList
          onItemClicked={id => setItemId(id)}
          renderItem={({ name }) => `${name}`}
          selectedItemId={itemId}
        />
      }
      right={<PlanetDetails itemId={itemId} />}
    />
  );
};
