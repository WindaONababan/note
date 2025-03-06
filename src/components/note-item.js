class NoteItem extends HTMLElement {
  set note(note) {
    this.innerHTML = `
    <div class="note-item">
      <h2>${note.title}</h2>
      <p>${note.body}</p>
      <small>${new Date(note.createdAt).toLocaleString()}</small>
      <button class="delete-btn" data-id="${note.id}">
        <i class="fas fa-trash-alt"></i> Hapus
      </button>
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
    
  }

  async deleteNote(id) {
    try {
      const response = await fetch(
        `https://notes-api.dicoding.dev/v2/notes/${id}`,
        {
          method: "DELETE",
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        this.remove(); // Hapus elemen dari UI
      } else {
        alert("Gagal menghapus catatan!");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat menghapus catatan!");
    }
  }
}

async function loadNotes() {
  loadingIndicator.style.display = "block";
  const notes = await fetchNotes();
  noteList.notes = notes;
  loadingIndicator.style.display = "none";

  // Pastikan GSAP hanya dijalankan setelah elemen muncul
  setTimeout(() => {
    const noteItems = document.querySelectorAll("note-item");
    if (noteItems.length > 0) {
      gsap.from(noteItems, { opacity: 0, y: 20, duration: 0.5, stagger: 0.2 });
    }
  }, 100);
}


customElements.define("note-item", NoteItem);
