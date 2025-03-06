const API_URL = "https://notes-api.dicoding.dev/v2";

async function loadNotes() {
  loadingIndicator.style.display = "block";
  const notes = await fetchNotes();
  console.log("Data dari API:", notes); // 🔍 Debug isi data

  noteList.notes = notes;
  loadingIndicator.style.display = "none";
}


export async function fetchNotes() {
  try {
    console.log("Mengambil catatan dari API...");
    const response = await fetch(`${API_URL}/notes`);
    const result = await response.json();

    console.log("Respons dari API:", result);

    if (result.status === "success") {
      console.log("Catatan berhasil diambil:", result.data);
      return result.data;
    }

    throw new Error("Gagal mengambil data catatan.");
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function addNote(title, body) {
  try {
    const response = await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });

    const result = await response.json();
    if (result.status === "success") {
      return true;
    }
    throw new Error("Gagal menambahkan catatan.");
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function deleteNote(noteId) {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}`, { method: "DELETE" });
    const result = await response.json();
    return result.status === "success";
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function archiveNote(noteId) {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}/archive`, { method: "POST" });
    const result = await response.json();
    return result.status === "success";
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function unarchiveNote(noteId) {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}/unarchive`, { method: "POST" });
    const result = await response.json();
    return result.status === "success";
  } catch (error) {
    console.error(error);
    return false;
  }
}
