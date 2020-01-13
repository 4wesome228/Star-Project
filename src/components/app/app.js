import React from "react";
import Header from "../header/Header";
import RandomPlanet from "../random-planet/random-planet";

import PeoplePage from "../people-page/people-page";

const App = () => {
  return (
    <div className="container">
      <Header />
      <RandomPlanet />
      <PeoplePage />
    </div>
  );
};

export default App;
