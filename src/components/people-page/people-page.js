import React, { useState } from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";
import Row from "../Row/row";
import ErorrBoundry from "../ErrorBoundry/errorBoundry";

export default function PeoplePage() {
  const swapiService = new SwapiService();
  const [selectedPersonId, setSelectedPerson] = useState(1);

  const onPersonItemClicked = selectedPersonId => {
    setSelectedPerson(selectedPersonId);
  };

  const itemList = (
    <ItemList
      selectedPersonId={selectedPersonId}
      onItemClicked={onPersonItemClicked}
      getData={swapiService.getAllPeople}
      renderItem={({ name }) => `${name}`}
    />
  );

  const personDetails = <PersonDetails personId={selectedPersonId} />;
  return (
    <ErorrBoundry>
      <Row left={itemList} right={personDetails} />
    </ErorrBoundry>
  );
}
