import React from "react";
import "./item-list.css";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types";

const ItemList = props => {
  const { data, renderItem, onItemClicked, selectedItemId } = props;
  const items = data.map(item => {
    const { id } = item;
    const isActive = id == selectedItemId;
    console.log(id);
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

ItemList.propTypes = {
  renderItem: PropTypes.func.isRequired,
  selectedItemId: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemList;
