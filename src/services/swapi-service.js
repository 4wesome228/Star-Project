class swapiService {
  _apibase = "https://swapi.co/api";

  async getData(url) {
    const resp = await fetch(`${this._apibase}${url}`);
    if (!resp.ok) {
      throw new Error("Something went wrong!");
    }
    return await resp.json();
  }

  async getAllPeople() {
    const res = await this.getData("/people/");
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getData(`/people/${id}`);
    return this._transformPerson(person);
  }

  async getPlanets() {
    const res = await this.getData("/planets/");
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getData(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getStarship(id) {
    const starship = await this.getData(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  async getStarships() {
    const res = await this.getData("/starships/");
    return res.results.map(this._transformStarship);
  }

  _generateId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._generateId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship(starship) {
    return {
      id: this._generateId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  }

  _transformPerson(person) {
    return {
      id: this._generateId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    };
  }
}

export default swapiService;
