class swapiService {
  _apibase = "https://swapi.co/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  async getData(url) {
    const resp = await fetch(`${this._apibase}${url}`);
    if (!resp.ok) {
      throw new Error("Something went wrong!");
    }
    return await resp.json();
  }

  getAllPeople = async () => {
    const res = await this.getData("/people/");
    return res.results.map(this._transformPerson);
  };

  getPerson = async id => {
    const person = await this.getData(`/people/${id}`);
    return this._transformPerson(person);
  };

  getPlanets = async () => {
    const res = await this.getData("/planets/");
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getData(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getStarship = async id => {
    const starship = await this.getData(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  getStarships = async () => {
    const res = await this.getData("/starships/");
    return res.results.map(this._transformStarship);
  };

  _generateId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = planet => {
    return {
      id: this._generateId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformStarship = starship => {
    return {
      id: this._generateId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  };

  _transformPerson = person => {
    return {
      id: this._generateId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };

  getPersonImage = ({ id }) => {
    const a = `${this._imageBase}/characters/${id}.jpg`;
    console.log(a);
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };
}

export default swapiService;
