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