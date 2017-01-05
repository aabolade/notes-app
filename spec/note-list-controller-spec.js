(function aNewControllerIsInstantiated() {
  var noteController = new NoteController()
assert.isTrue(noteController instanceof NoteController)
})();

(function checkingInnerHTMLProperty() {

  function NoteListViewDouble() {};

  NoteListViewDouble.prototype = {
    returnHTML: function() { return "<ul><li><div id=\"app\">Mock Text</div></li></ul>"}
  };


  var noteListViewDouble = new NoteListViewDouble()
  var noteController = new NoteController()
  noteController.noteListView = noteListViewDouble;
  noteController.updateHTML()

  var element = document.getElementById("app")
  assert.isTrue(element.innerHTML === noteListViewDouble.returnHTML())

})();

(function loadContentForNewPage() {
  var noteController = new NoteController()

  noteController.createNote("A sailor went to sea to see what he could see.")
  noteController.updateHTML()

  window.location.href = "file:///Users/lekeabolade/Documents/MakersAcademy/notesApp/specrunner.html#1"
  var element = document.getElementById("app")
  assert.isTrue(element.innerHTML === "A sailor went to sea to see what he could see.")
})();
