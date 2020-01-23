import React, { useState } from "react";
import PersonDetails from "../starwars-components/person-details";
import { PersonList } from "../starwars-components/item-lists";
import Row from "../Row/row";

export default () => {
  const [itemId, setItemId] = useState(2);
  return (
    <Row
      left={
        <PersonList
          onItemClicked={id => setItemId(id)}
          renderItem={({ name }) => `${name}`}
          selectedItemId={itemId}
        />
      }
      right={<PersonDetails itemId={itemId} />}
    />
  );
};
