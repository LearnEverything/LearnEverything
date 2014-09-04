Template.oneExercise.events({
	"click [data-action='saveExercise']" : function(e, t){
      e.preventDefault();
      var exerciseObj = {
            name:$("[name='exerciseNameSave']").val(),
            totalCost:$("[name='exerciseTotalCostSave']").val(),
            dueDate:$("[name='exerciseDueDateSave']").val(),
            startDate:$("[name='exerciseDateSave']").val(),
            notes:$("[name='exerciseNotesSave']").val(),
        };
    	Exercises.update({_id: Router.current().params._id},
        {$set: exerciseObj }); 
  	Session.set('editingExercise', false); //two lines to open new window
    Router.go('allExercises');	 
		}	
	});

  Template.oneExercise.events({
  "click [data-action='cancelEditExercise']" : function(e, t){
    Session.set('editingExercise', false); //two lines to open new windo
    Router.go('allExercises', {_id: exerciseId});
    } 
  });

  Template.oneExercise.events({
  "click [data-action='editExercise']" : function(e, t){
    Session.set('editingExercise', true); //two lines to open new window
    Router.go('allExercises', {_id: exerciseId});   
    }   
  });   


  Template.oneExercise.events({
  "click [data-action='removeExercise']" : function(e, t){
    Exercises.remove(Router.current().params._id);
    Router.go('allExercises'); 
    }   
  }); 

