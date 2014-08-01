if(Meteor.isClient){

Router.map(function() {
	this.route("home", {
		template: "home",
		path: "/",
		layoutTemplate: "LearnEverythingLayout"
	})
	this.route('allSyllabi', {
		template: 'allSyllabi',
		path: '/syllabi',
		layoutTemplate: "LearnEverythingLayout"
		//waitOn: function(){
		//	return Meteor.subscribe("");
		//}
	});
	this.route('oneSylabus', {
		template: 'oneSylbaus',
		path: '/syllabus/:_id',
		layoutTemplate: "LearnEverythingLayout",
    //waitOn: function(){
    //  return Meteor.subscribe("");
    //}
	});
	this.route('allTopics', {
		template: 'allTopics',
		path: '/topics',
		layoutTemplate: "LearnEverythingLayout",
    //waitOn: function(){
    //  return Meteor.subscribe("");
    //}
	});
	this.route('oneTopic', {
		template: 'oneTopic',
		path: '/topic/_id',
		layoutTemplate: "LearnEverythingLayout",
    //waitOn: function(){
    //  return Meteor.subscribe("");
    //}
	});
	this.route('allExercises', {
		template: 'allExercises',
		path: '/exercises',
		layoutTemplate: "LearnEverythingLayout",
    //waitOn: function(){
    //  return Meteor.subscribe("");
    //}
	});
	this.route('oneExercise', {
		template: 'oneExercise',
		path: '/exercise/:id',
		layoutTemplate: "LearnEverythingLayout",
    //waitOn: function(){
    //  return Meteor.subscribe("");
    //}
	});
	this.route('showDashboard', {
		template: 'showDashboard',
		path: '/dashboard',
		layoutTemplate: "LearnEverythingLayout",
    //waitOn: function(){
    //  return Meteor.subscribe("");
    //}
	});
	this.route('allProjects', {
		template: 'allProjects',
		path: '/projects',
		layoutTemplate: "LearnEverythingLayout",
    waitOn: function(){
    	return Meteor.subscribe("allProjects");
    	}
	});
	this.route('oneProject', {
		template: 'oneProject',
		path: '/project/:_id',
		layoutTemplate: "LearnEverythingLayout",
    //waitOn: function(){
    //  return Meteor.subscribe("");
    //}
	});

	this.route('allClients', {
		template: 'allClients',
		path: '/clients',
		layoutTemplate: "LearnEverythingLayout",
    //waitOn: function(){
    //  return Meteor.subscribe("");
    //}
	});
	this.route('oneClient', {
		template: 'oneClient',
		path: '/client/:_id',
		layoutTemplate: "LearnEverythingLayout",
    //waitOn: function(){
    //  return Meteor.subscribe("");
    //}
	});
})
}

if(Meteor.isServer){


}




/*
this.route('', {
		template: '',
		path: '/',
		layoutTemplate: "",
    waitOn: function(){
      return Meteor.subscribe("");
    }
	});

	*/