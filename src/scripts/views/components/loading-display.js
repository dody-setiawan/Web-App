class LoadingDisplay extends HTMLElement {
  constructor() {
    super();
    this.show();
  }

  show() {
    this.innerHTML = `
      <div class="display-inner" >
        <p tabindex="0">Wait a moment</p>
        <i id="loader" class='bx bx-loader bx-spin'></i>
      </div>
    `;
  }
}

customElements.define('loading-display', LoadingDisplay);
