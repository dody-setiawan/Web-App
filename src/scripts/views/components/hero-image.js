import heroImg from '../../../public/images/hero-image.jpg';

class HeroImage extends HTMLElement {
  constructor() {
    super();
    this.show();
  }

  show() {
    this.innerHTML = `
    <style>
      #hero {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImg});
      }
    </style>

    <div id="hero">
      <div id="hero-inner">
        <h2 tabindex="0" class="content__heading">Restaurants Catalogue</h2>
        <p tabindex="0">Find a restaurant that you like</p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-image', HeroImage);
