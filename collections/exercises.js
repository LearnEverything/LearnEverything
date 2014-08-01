Exercises = new Meteor.Collection('exercises');

Exercises.allow({
  insert: function(title) {
    return true;
  },
  //update: function() {
    //return doc.owner === userId;
   // return true;
  //},
  remove: function(title){
    return true;
  },
  fetch: []
});