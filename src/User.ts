import faker from 'faker';

class User {
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
}

export default User;
