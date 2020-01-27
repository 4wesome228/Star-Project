import React from "react";
import PersonDetails from "../starwars-components/person-details";
import { PersonList } from "../starwars-components/item-lists";
import Row from "../Row/row";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;

  return (
    <Row
      left={
        <PersonList
          onItemClicked={id => history.push(`${id}`)}
          renderItem={({ name }) => `${name}`}
          selectedItemId={parseInt(id)}
        />
      }
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
