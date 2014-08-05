

Template.allProjects.events({
  "click [data-action='addProject']" : function(e, t){
    var projectId = Projects.insert({
      name:"Project Name?",
     	totalCost:"Project Cost?",
     	dueDate:"Due On?",
     	startDate:"Assigned On?",
     	notes:"A brief note.",
  			});
  Session.set('editingProject', true); //two lines to open new window
  Router.go('oneProject', {_id: projectId});	 
		}	
}); 

