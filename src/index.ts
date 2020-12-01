import CustomMaps from './CustomMap';
import User from './User';
import Company from './Company';

const user = new User();
const company = new Company();

const customMap = new CustomMaps('map');
customMap.addMaker(user);
customMap.addMaker(company);
