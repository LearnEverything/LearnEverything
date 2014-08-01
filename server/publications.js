Meteor.publish("allProjects", function(){
	return Projects.find({userId: this.userId});
});