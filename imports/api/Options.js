import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export const Options = new Mongo.Collection('options');

if (Meteor.isServer){
	Meteor.publish('options.all', () => {
	  return Options.find({})
	});
  /*Meteor.publish('cars.single', (slug) => {
    return Cars.find({slug:slug}, {sort: {createdAt: -1}, limit: 1})
  });*/
}

Meteor.methods({
  'insertNewOption': function(data){
    Options.insert({
      pageCode: data.pageCode,
      link: data.link,
      optionText: data.optionText
    });
  },
});