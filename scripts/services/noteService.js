angular.module("notesApp")
.service("noteService", noteService);


function noteService(){

this.addNote = function(note){
  localStorage.setItem(JSON.stringify(note));
};






}//end of service
