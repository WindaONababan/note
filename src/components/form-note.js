class FormNote extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <form>
        <h3>Title</h3>
          <input type="text" id="title" placeholder="Note Title" required />
          <h3>Body</h3>
          <textarea id="body" placeholder="Note Body" rows="5" required></textarea>
          <button type="submit" id="submitBtn">
            <span id="btnText">Add Note</span>
            <span id="loadingIcon" style="display: none; margin-left: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" r="40" stroke-width="10" stroke="#fff" stroke-dasharray="188.49555921538757 64.83185307179586" fill="none" stroke-linecap="round">
                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"/>
                </circle>
              </svg>
            </span>
          </button>
        </form>
      `;

    this.querySelector("form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const title = this.querySelector("#title").value.trim();
      const body = this.querySelector("#body").value.trim();
      const submitBtn = this.querySelector("#submitBtn");
      const btnText = this.querySelector("#btnText");
      const loadingIcon = this.querySelector("#loadingIcon");

      if (title && body) {
        submitBtn.disabled = true;
        btnText.style.display = "none";
        loadingIcon.style.display = "inline";

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulasi loading

        this.dispatchEvent(
          new CustomEvent("note-added", {
            detail: { title, body },
            bubbles: true,
          }),
        );

        submitBtn.disabled = false;
        btnText.style.display = "inline";
        loadingIcon.style.display = "none";
        event.target.reset();
      }
    });
  }
}
customElements.define("form-note", FormNote);