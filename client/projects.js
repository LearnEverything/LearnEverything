
	Template.allProjects.events({
	"click [data-action='addProject']" : function(e, t){
    	var projectId = Projects.insert({
        name:"placeholder",
     	totalCost:"placeholder",
     	dueDate: "placeholder",
     	startDate:"placeholder",
     	notes: "placeholder",
  			});
  	Session.set('editingProject', true); //two lines to open new window
    Router.go('oneProject', {_id: projectId});	 
		}	
	}); 
