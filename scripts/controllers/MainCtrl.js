angular.module("notesApp")
.controller("MainCtrl", MainCtrl);


function MainCtrl($scope,noteService) {


$scope.saveNote = function(newNote){
noteService.addNote(newNote);

}



}//end of controller
