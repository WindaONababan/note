class NoteItem extends HTMLElement {
  set note(note) {
    this.innerHTML = `
  <div class="note-item">
    <h2>${note.title}</h2>
    <p>${note.body}</p>
    <small>${new Date(note.createdAt).toLocaleString()}</small>
    <div class="note-actions">
      <button class="archive-btn" data-id="${note.id}">
        <i class="fas fa-archive"></i> Arsipkan
      </button>
      <button class="delete-btn" data-id="${note.id}">
        <i class="fas fa-trash-alt"></i> Hapus
      </button>
    </div>
  </div>
`;

    this.querySelector(".delete-btn").addEventListener("click", () => {
      if (confirm("Apakah Anda yakin ingin menghapus catatan ini?")) {
        this.dispatchEvent(
          new CustomEvent("note-delete", {
            detail: note.id,
            bubbles: true,
          })
        );
      }
    });

    this.querySelector(".archive-btn").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent(note.archived ? "note-unarchive" : "note-archive", {
          detail: note.id,
          bubbles: true,
        })
      );
    });
  }
}

customElements.define("note-item", NoteItem);
