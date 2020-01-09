import React, { Component, Fragment } from "react";
import swapiService from "../../services/swapi-service";
import "./random-planet.css";
import Spinner from "../spinner/spinner";

export default class RandomPlanet extends Component {
  swapiService = new swapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onRandomPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 3);
    this.swapiService.getPlanet(id).then(this.onRandomPlanetLoaded);
  }

  render() {
    const { loading, planet } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        {loading ? <Spinner /> : null}
        {!loading ? <Planet planet={planet} /> : null}
      </div>
    );
  }
}

const Planet = ({ planet }) => {
  const { population, rotationPeriod, diameter, name, id } = planet;
  return (
    <Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
