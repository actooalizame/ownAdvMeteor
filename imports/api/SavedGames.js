import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const SavedGames = new Mongo.Collection('savedGames');

if (Meteor.isServer){
	Meteor.publish('savedGames.all', () => {
	  return SavedGames.find({})
	});
  /*Meteor.publish('cars.single', (slug) => {
    return Cars.find({slug:slug}, {sort: {createdAt: -1}, limit: 1})
  });*/
}

Meteor.methods({
  'insertNewSave': function(deviceId,lastStep){
    SavedGames.insert({
      deviceId:deviceId,
      lastStep:lastStep,
      createdAt: new Date(),
    });
  },
});