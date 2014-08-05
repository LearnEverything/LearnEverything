
	Template.oneProject.events({
	"click [data-action='saveProject']" : function(e, t){
      e.preventDefault();
      var projectObj = {
            name:$("[name='projectNameSave']").val(),
            totalCost:$("[name='projectTotalCostSave']").val(),
            dueDate:$("[name='projectDueDateSave']").val(),
            startDate:$("[name='projectDateSave']").val(),
            notes:$("[name='projectNotesSave']").val(),
        };
    	Projects.update({_id: Router.current().params._id},
        {$set: projectObj }); 
  	Session.set('editingProject', false); //two lines to open new window
    Router.go('allProjects');	 
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

