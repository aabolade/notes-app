(function aNewControllerIsInstantiated() {
  var noteController = new NoteController();
assert.isTrue(noteController instanceof NoteController);
})();

(function checkingInnerHTMLProperty() {

  function NoteListViewDouble() {}

  NoteListViewDouble.prototype = {
    returnHTML: function() { return "<ul><li><div id=\"app\">Mock Text</div></li></ul>";}
  };


  var noteListViewDouble = new NoteListViewDouble();
  var noteController = new NoteController();
  noteController.noteListView = noteListViewDouble;
  noteController.updateHTML();

  var element = document.getElementById("app");

  assert.isTrue(element.innerHTML === noteListViewDouble.returnHTML());

})();

// (function loadContentForNewPage() {
//   var newNoteController = new NoteController();
//
//   newNoteController.createNote("A sailor went to sea to see what he could see.");
//   newNoteController.updateHTML();
//
//   window.location.hash = "";
//   window.location.hash = "#0";
//
//   var newElement = document.getElementById("app");
//   console.log("this is newElement" + newElement);
//   console.log("this is newElement.innerHTML" + newElement.innerHTML);
//
//   // var testDiv = document.createElement("div");
//   // var content = document.createTextNode("A sailor went to sea to see what he could see.");
//   // testDiv.setAttribute("id","app");
//   // testDiv.appendChild(content);
//   // console.log(testDiv.innerHTML);
//   // console.log(newElement.innerHTML);
//   //
//   //
//   //
//   // var newDiv = document.createElement("div");
//   // newDiv.setAttribute("id","app");
//   // newDiv.appendChild(content);
//   //
//   // console.log(newDiv.innerHTML);
//
//   // //console.log(document.getElementById("app"));
//   // console.log(newElement.textContent);
//   // console.log(newElement);
//   // console.log(newElement.innerHTML);
//   assert.isTrue(element === "whatever");
// })();
