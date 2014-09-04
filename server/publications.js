Meteor.publish("allProjects", function(){
	return Projects.find({userId: this.userId});
});
Meteor.publish("allExercises", function(){
	return Exercises.find({userId: this.userId});
});
Meteor.publish("allClients", function(){
	return Meteor.users.find({'profile.userId': this.userId, 'profile.type': "client"});
})