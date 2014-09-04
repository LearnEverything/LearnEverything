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
	    waitOn: function(){
	    	return Meteor.subscribe("allExercises");
	    	},
	    data: function(){
	    	return {
	    		exercises: function(){
	    			return Exercises.find();
	    		}
	    	}
	    }
	});
	this.route('oneExercise', {
		template: 'oneExercise',
		path: '/exercise/:_id',
		layoutTemplate: "LearnEverythingLayout",
	waitOn: function(){
      return Meteor.subscribe("allExercises");
    },
    data: function(){
    	var self = this;
    	return {
        	exercise: function(){
        		return Exercises.findOne({_id: self.params._id});
        	}
    	}
    }
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
		//template: 'allProjects',
		path: '/projects',
		layoutTemplate: "LearnEverythingLayout",
	    waitOn: function(){
	    	return Meteor.subscribe("allProjects");
	    	},
	    data: function(){
	    	return {
	    		projects: function(){
	    			return Projects.find();
	    		}
	    	}
	    }
	});
	this.route('oneProject', {
		template: 'oneProject',
		path: '/project/:_id',
		layoutTemplate: "LearnEverythingLayout",
    waitOn: function(){
      return Meteor.subscribe("allProjects");
    },
    data: function(){
    	var self = this;
    	return {
        	project: function(){
        		return Projects.findOne({_id: self.params._id});
        	}
    	}
    }
	});

	this.route('allClients', {
		template: 'allClients',
		path: '/clients',
		layoutTemplate: "LearnEverythingLayout",
    waitOn: function(){
      return Meteor.subscribe("");
    }
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