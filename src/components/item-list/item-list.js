import React, { Component } from "react";
import "./item-list.css";
import Spinner from "../spinner/spinner";
import { hoc } from "../hoc-helper/hoc";
import swapiService from "../../services/swapi-service";

const ItemList = props => {
  const { data, renderItem, onItemClicked, selectedItemId } = props;
  const items = data.map(item => {
    const { id } = item;
    const isActive = id == selectedItemId;
    const label = renderItem(item);

    return (
      <li
        className={isActive ? "list-group-item active" : "list-group-item"}
        key={id}
        onClick={() => onItemClicked(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">{!data ? <Spinner /> : items}</ul>
  );
};

export default ItemList;
