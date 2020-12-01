import faker from 'faker';
import { Mappable } from './CustomMap';

class User implements Mappable {
  loc: {
    lat: number;
    lng: number;
  };

  name: string;

  constructor() {
    this.name = faker.name.firstName();
    this.loc = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  makerContent(): string {
    return ` <div>Worker name is ${this.name}</div>`;
  }
}

export default User;
