import React, { useState } from "react";
import Header from "../header/Header";
import ErrorBoundry from "../ErrorBoundry/errorBoundry";

import {
  PersonList,
  PlanetList,
  StarshipList
} from "../starwars-components/item-lists";

import {
  PlanetDetails,
  StarshipDetails,
  PersonDetails
} from "../starwars-components/details";

const App = () => {
  const [itemId, setItemId] = useState(1);
  return (
    <ErrorBoundry>
      <div className="container">
        <Header />
        <PersonList
          onItemClicked={id => setItemId(id)}
          renderItem={({ name }) => `${name}`}
          selectedItemId={itemId}
        />
        <PersonDetails itemId={itemId} />
        <PlanetList
          onItemClicked={id => setItemId(id)}
          renderItem={({ name }) => `${name}`}
          selectedItemId={itemId}
        />
        <PlanetDetails itemId={itemId} />
        <StarshipList
          onItemClicked={() => console.log("")}
          renderItem={({ name }) => `${name}`}
          selectedItemId={5}
        />
        <StarshipDetails itemId="11" />
      </div>
    </ErrorBoundry>
  );
};

export default App;
