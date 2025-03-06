import "./css/style.css";
import "./components/form-note.js";
import "./components/note-list.js";
import "./components/note-item.js";
import { gsap } from "gsap";
import { fetchNotes, addNote, deleteNote, archiveNote, unarchiveNote } from "./api.js";

const loadingIndicator = document.getElementById("loading");
const noteList = document.querySelector("note-list");

async function loadNotes() {
  loadingIndicator.style.display = "block";

  const notes = await fetchNotes();
  console.log("Mengupdate UI dengan catatan:", notes);

  noteList.notes = notes;

  loadingIndicator.style.display = "none";
}

document.querySelector("form-note").addEventListener("note-added", async (event) => {
  const { title, body } = event.detail;
  console.log("Menambahkan catatan:", { title, body });

  const success = await addNote(title, body);
  if (success) {
    console.log("Catatan berhasil ditambahkan!");
    loadNotes();
  } else {
    console.error("Gagal menambahkan catatan.");
    alert("Gagal menambahkan catatan.");
  }
});


document.addEventListener("note-delete", async (event) => {
  const noteId = event.detail;
  if (await deleteNote(noteId)) {
    loadNotes();
  } else {
    alert("Gagal menghapus catatan.");
  }
});

document.addEventListener("note-archive", async (event) => {
  const noteId = event.detail;
  if (await archiveNote(noteId)) {
    loadNotes();
  } else {
    alert("Gagal mengarsipkan catatan.");
  }
});

document.addEventListener("note-unarchive", async (event) => {
  const noteId = event.detail;
  if (await unarchiveNote(noteId)) {
    loadNotes();
  } else {
    alert("Gagal mengembalikan catatan dari arsip.");
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  await loadNotes();

  // Pastikan GSAP berjalan setelah elemen muncul
  setTimeout(() => {
    gsap.from("note-item", { opacity: 0, y: 20, duration: 0.5, stagger: 0.2 });
  }, 100);
});
