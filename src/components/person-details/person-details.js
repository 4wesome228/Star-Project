import React, { Component } from "react";
import SwapiServcie from "../../services/swapi-service";
import "./person-details.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiServcie();

  state = {
    personDetails: null
  };

  componentDidMount() {
    this.updatePersonDetails(this.props.personId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePersonDetails(this.props.personId);
    }
  }

  updatePersonDetails = personId => {
    if (personId) {
      this.swapiService
        .getPerson(personId)
        .then(personDetails => this.setState({ personDetails }));
    } else return;
  };

  render() {
    if (!this.state.personDetails)
      return <span>Select person from a list !</span>;

    const { id, name, gender, birthYear, eyeColor } = this.state.personDetails;

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="Character"
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender || "unknown"}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth year</span>
              <span>{birthYear || "unknown"}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color</span>
              <span>{eyeColor || "unknown"}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
