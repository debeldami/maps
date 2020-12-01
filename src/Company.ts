import faker from 'faker';

class Company {
  name: string;
  catchPhrase: string;
  loc: {
    lng: number;
    lat: number;
  };
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.loc = {
      lng: parseFloat(faker.address.longitude()),
      lat: parseFloat(faker.address.latitude()),
    };
  }
}

export default Company;
