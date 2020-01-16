import ItemList from "../item-list/item-list";
import { hoc } from "../hoc-helper/hoc";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getPlanets, getStarships } = new SwapiService();

const PersonList = hoc(ItemList, getAllPeople);

const PlanetList = hoc(ItemList, getPlanets);
const StarshipList = hoc(ItemList, getStarships);

export { PersonList, PlanetList, StarshipList };
