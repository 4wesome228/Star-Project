import React, { Component } from "react";
import swapiService from "../../services/swapi-service";
import "./random-planet.css";
import Spinner from "../spinner/spinner";
import Planet from "../Planet/planet";

export default class RandomPlanet extends Component {
  swapiService = new swapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  onRandomPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 3);
    this.swapiService
      .getPlanet(id)
      .then(this.onRandomPlanetLoaded)
      .catch(err => console.log(err));
  };

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
