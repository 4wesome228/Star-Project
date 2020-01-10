import React, { useState } from "react";
import Header from "../header/Header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import { Switch, Route, Router } from "react-router-dom";

const App = () => {
  const [selectedPersonId, setSelectedPerson] = useState(1);

  const onPersonItemClicked = id => {
    setSelectedPerson(id);
  };

  return (
    <div className="container">
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            selectedPersonId={selectedPersonId}
            onItemClicked={onPersonItemClicked}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPersonId} />
        </div>
      </div>
    </div>
  );
};

export default App;
