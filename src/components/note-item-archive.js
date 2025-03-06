class NoteItemArchive extends HTMLElement {
    set note(note) {
      this.innerHTML = `
        <div class="note-item">
          <h2>${note.title}</h2>
          <p>${note.body}</p>
          <small>${new Date(note.createdAt).toLocaleString()}</small>
          <button class="unarchive-btn" data-id="${note.id}">
            <i class="fas fa-box-open"></i> Kembalikan
          </button>
        </div>
      `;
  
      // Event listener untuk Unarchive
      this.querySelector(".unarchive-btn").addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("note-unarchive", {
            detail: note.id,
            bubbles: true,
          })
        );
      });
    }
  }
  
  customElements.define("note-item-archive", NoteItemArchive);
  