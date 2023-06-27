// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Beer, Glass, BrewStyle, Category, Availability, Srm, Labels } = initSchema(schema);

export {
  Beer,
  Glass,
  BrewStyle,
  Category,
  Availability,
  Srm,
  Labels
};