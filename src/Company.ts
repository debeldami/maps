import faker from 'faker';
import { Mappable } from './CustomMap';

class Company implements Mappable {
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

  makerContent(): string {
    return `
    <div>
    <h4>Company name is ${this.name}</h4>
    <div>Company catch phrase is ${this.catchPhrase}</div>
    </div>
    `;
  }
}

export default Company;
