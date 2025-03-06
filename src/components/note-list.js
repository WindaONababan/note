class NoteList extends HTMLElement {
  set notes(notes) {
    this.innerHTML = "";
    notes.forEach((note) => {
      const noteItemElement = document.createElement("note-item");
      noteItemElement.note = note;
      this.appendChild(noteItemElement);
    });
  }
}
customElements.define("note-list", NoteList);
