class FormNote extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <form>
        <h3>Judul</h3>
          <input type="text" id="title" placeholder="Note Title" required />
          <h3>Body</h3>
          <textarea id="body" placeholder="Note Body" rows="5" required></textarea>
          <button type="submit">Add Note</button>
        </form>
      `;

    this.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.querySelector("#title").value.trim();
      const body = this.querySelector("#body").value.trim();
      if (title && body) {
        this.dispatchEvent(
          new CustomEvent("note-added", {
            detail: { title, body },
            bubbles: true,
          })
        );
        event.target.reset();
      }
    });
  }
}
customElements.define("form-note", FormNote);
