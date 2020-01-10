import React, { Component } from "react";
import "./item-list.css";

import Spinner from "../spinner/spinner";
export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(people => this.setState({ itemList: people }));
  }

  renderItems(array) {
    return array.map(item => {
      const { id } = item;
      const isActive = id == this.props.selectedPersonId;
      const label = this.props.renderItem(item);

      return (
        <li
          className={isActive ? "list-group-item active" : "list-group-item"}
          key={id}
          onClick={() => this.props.onItemClicked(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    return (
      <ul className="item-list list-group">
        {!itemList ? <Spinner /> : this.renderItems(itemList)}
      </ul>
    );
  }
}
