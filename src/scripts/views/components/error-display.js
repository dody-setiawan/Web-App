import errorImg from '../../../public/images/error-image.png';

class ErrorDisplay extends HTMLElement {
  constructor() {
    super();
  }

  set errorMessage(errorMessage) {
    this._errorMessage = errorMessage;
    this.show();
  }

  show() {
    this.innerHTML = `
      <div class="display-inner" >
        <h1 tabindex="0">ERROR</h1>
        <img tabindex="0" src="${errorImg}" alt="Error with two traffic cones" />
        <p tabindex="0">${this._errorMessage}</p>
      </div>
    `;
  }
}

customElements.define('error-display', ErrorDisplay);
