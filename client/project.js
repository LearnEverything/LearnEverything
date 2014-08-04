
	Template.oneProject.events({
	"click [data-action='saveProject']" : function(e, t){
    	var projectId = Projects.update({
        name:$("[name='projectName']").val(),
     	totalCost:$("[name='projectTotalCost']").val(),
     	dueDate:$("[name='projectDueDate']").val(),
     	startDate:$("[name='projectDate']").val(),
     	notes:$("[name='projectNotes']").val(),
  			});
  	Session.set('editingProject', false); //two lines to open new window
    Router.go('allProjects', {_id: projectId});	 
		}	
	});

  Template.oneProject.events({
  "click [data-action='cancelEditProject']" : function(e, t){
    Session.set('editingProject', false); //two lines to open new window
    Router.go('allProject', {_id: projectId});
    } 
  });

  Template.oneProject.events({
  "click [data-action='editProject']" : function(e, t){
    Session.set('editingProject', true); //two lines to open new window
    Router.go('allProject', {_id: projectId});   
    }   
  });   


  Template.oneProject.events({
  "click [data-action='removeProject']" : function(e, t){
    Projects.remove(Router.current().params._id);
    Router.go('allProjects'); 
    }   
  }); 

