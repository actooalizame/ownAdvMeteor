import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export const Pages = new Mongo.Collection('pages');

if (Meteor.isServer){
	Meteor.publish('pages.all', () => {
	  return Pages.find({})
	});
  /*Meteor.publish('cars.single', (slug) => {
    return Cars.find({slug:slug}, {sort: {createdAt: -1}, limit: 1})
  });*/
}

Meteor.methods({
  'insertNewPage': function(data){
    Pages.insert({
      pageCode: data.pageCode,
      pageText: data.pageText,
    });
  },
});