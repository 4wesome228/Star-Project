import ItemList from "../item-list/item-list";
import { dataHOC } from "../hoc-helpers/dataHOC";
import SwapiService from "../../services/swapi-service";
import { swapiServiceHOC } from "../hoc-helpers/swapiServiceHOC";

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanets
  };
};

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarships
  };
};

const PersonList = swapiServiceHOC(dataHOC(ItemList), mapPersonMethodsToProps);

const PlanetList = swapiServiceHOC(dataHOC(ItemList), mapPlanetMethodsToProps);

const StarshipList = swapiServiceHOC(
  dataHOC(ItemList),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
