
(function(exports) {

  var NoteController = function() {
  this.noteList = new NoteList()
  this.noteListView = new NoteListView(this.noteList)
};


  NoteController.prototype.createNote = function(note) {
    return this.noteList.addNote(note);
  }

  NoteController.prototype.updateHTML = function() {
    var app = document.getElementById("app");
    app.innerHTML = this.noteListView.returnHTML();
  };



  NoteController.prototype.showSingleNoteForCurrentPage = function() {
    this.showSingleNote(this.getNoteFromURL());
    console.log("HELOO")
  };

  NoteController.prototype.getNoteFromURL = function() {
    var noteID = window.location.hash.split("#")[1];
    console.log(noteID)

    function findNoteByID(element) {
      return element.id.toString() === noteID;
    }

     note = this.noteList.notes.find(findNoteByID);
    return note.text;
  };

  NoteController.prototype.showSingleNote = function(note) {
    var app = document.getElementById("app");
    app.innerHTML = note;
  };

  exports.NoteController = NoteController;

})(this);
