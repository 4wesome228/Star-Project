import React, { useState } from "react";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../Row/row";
import ErorrBoundry from "../ErrorBoundry/errorBoundry";

export default function PeoplePage() {
  const swapiService = new SwapiService();
  const [selectedItemId, setSelectedItem] = useState(1);

  const onItemClicked = selectedItemId => {
    setSelectedItem(selectedItemId);
  };

  const itemList = (
    <ItemList
      selectedItemId={selectedItemId}
      onItemClicked={onItemClicked}
      getData={swapiService.getAllPeople}
      renderItem={({ name }) => `${name}`}
    />
  );

  const itemDetails = <ItemDetails itemId={selectedItemId} />;
  return (
    <ErorrBoundry>
      <Row left={itemList} right={itemDetails} />
    </ErorrBoundry>
  );
}
