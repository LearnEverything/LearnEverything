if (Meteor.isClient){

	Template.allProjects.events({
	"click [data-action='addProject']" : function(e, t){
    	var projectId = Projects.insert({
        name:$("[name='projectName']").val(),
     	totalCost:"placeholderValue", //$("[name='projectTotalCost']").val()
     	dueDate:"placeholderValue", //$("[name='projectDueDate']").val()
     	startDate:"placeholderValue",//$("[name='projectDate']").val()
     	notes:"placeholderValue"  //$("[name='projectNotes']").val()
  			});
  	//Session.set('adminEditingProject', true); //two lines to open new window
    //Router.go('Project', {_id: exerciseId});	 
		}	
	}); 
}