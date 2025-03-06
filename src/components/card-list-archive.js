class CardListArchive extends HTMLElement {
    set notes(notes) {
      this.innerHTML = "";
      if (notes.length === 0) {
        this.innerHTML = "<p>Tidak ada catatan yang diarsipkan.</p>";
        return;
      }
  
      notes.forEach((note) => {
        const noteItem = document.createElement("note-item-archive");
        noteItem.note = note;
        this.appendChild(noteItem);
      });
    }
  }
  
  customElements.define("card-list-archive", CardListArchive);
  