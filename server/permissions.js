var generalPermissions = {
  insert: function(name, userId){
    return true;
  },
  update: function(name, userId){
    //if (doc.userId !== userId) return false;
    return true;
  },
  remove: function(name, userId){
    return true;
  }
};



Exercises.allow(generalPermissions);
Projects.allow(generalPermissions);
Syllabi.allow(generalPermissions);
Topics.allow(generalPermissions);
UsersExercises.allow(generalPermissions);
UsersSyllabi.allow(generalPermissions);
Meteor.users.allow(generalPermissions);
