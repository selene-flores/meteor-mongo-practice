//import statement says to make the predefined “Mongo” class available to code inside this file
import { Mongo } from 'meteor/mongo';

export const PeopleCollection = new Mongo.Collection('People');