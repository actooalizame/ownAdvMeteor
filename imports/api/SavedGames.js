import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const SavedGames = new Mongo.Collection('savedGames');

if (Meteor.isServer){
	Meteor.publish('savedGames.all', function(deviceId) {
	  return SavedGames.find({deviceId})
	});
}

Meteor.methods({
  'insertNewSave': function(deviceId,lastStep){
    SavedGames.insert({
      deviceId:deviceId,
      lastStep:lastStep,
      createdAt: new Date(),
    });
  },
  'deleteSavedGame': function(savedId){
    SavedGames.remove(savedId);
  },
});