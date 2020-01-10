import React, { Component } from "react";
import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(people => this.setState({ peopleList: people }));
  }

  renderItems(array) {
    return array.map(({ id, name }) => {
      const isActive = id == this.props.selectedPersonId;

      return (
        <li
          className={isActive ? "list-group-item active" : "list-group-item"}
          key={id}
          onClick={() => this.props.onItemClicked(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    return (
      <ul className="item-list list-group">
        {!peopleList ? <Spinner /> : this.renderItems(peopleList)}
      </ul>
    );
  }
}
