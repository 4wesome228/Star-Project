import React from "react";
import { StarshipList } from "../starwars-components/item-lists";
import { withRouter } from "react-router-dom";

const StarshipsPage = ({ history }) => {
  return (
    <StarshipList
      onItemClicked={itemId => {
        history.push(`${itemId}`);
      }}
      renderItem={({ name }) => `${name}`}
    />
  );
};

export default withRouter(StarshipsPage);
