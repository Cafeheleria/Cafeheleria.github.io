class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Ing. Software 4CM50.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
