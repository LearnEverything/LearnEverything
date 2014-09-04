Template.allExercises.events({
  "click [data-action='addExercise']" : function(e, t){
        var exerciseId = Exercises.insert({
      name:"Name?",
     	totalCost:"Cost?",
     	dueDate:"Due on?",
     	startDate:"Assigned on?",
     	notes:"A brief note.",
  			});
  Session.set('editingExercise', true); //two lines to open new window
  Router.go('oneExercise', {_id: exerciseId});	
		}	
}); 