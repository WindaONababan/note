import "./css/style.css";
import "./components/form-note.js";
import "./components/note-list.js";
import "./components/note-item.js";
import "./components/card-list-archive.js";
import "./components/note-item-archive.js";
import { gsap } from "gsap";
import { fetchNotes, fetchArchivedNotes, addNote, deleteNote, archiveNote, unarchiveNote } from "./api.js";

const noteList = document.querySelector("note-list");
const archiveList = document.querySelector("card-list-archive");

document.querySelector("form-note").addEventListener("note-added", async (event) => {
  const { title, body } = event.detail;
  console.log("Menambahkan catatan:", { title, body });

  if (await addNote(title, body)) {
    console.log("Catatan berhasil ditambahkan!");
    loadNotes();
  } else {
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
    loadArchivedNotes();
  } else {
    alert("Gagal mengarsipkan catatan.");
  }
});

document.addEventListener("note-unarchive", async (event) => {
  const noteId = event.detail;
  if (await unarchiveNote(noteId)) {
    loadNotes();
    loadArchivedNotes();
  } else {
    alert("Gagal mengembalikan catatan dari arsip.");
  }
});

async function loadNotes() {
  const notes = await fetchNotes();
  noteList.notes = notes;
}

async function loadArchivedNotes() {
  const archivedNotes = await fetchArchivedNotes();
  archiveList.notes = archivedNotes;
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadNotes();
  await loadArchivedNotes();
  
  setTimeout(() => {
    gsap.from("note-item", { opacity: 0, y: 20, duration: 0.5, stagger: 0.2 });
    gsap.from("note-item-archive", { opacity: 0, y: 20, duration: 0.5, stagger: 0.2 });
  }, 100);
});
