class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.show();
  }

  show() {
    this.innerHTML = `
    <input id="searchInput" type="search" placeholder="Search restaurant name" spellcheck="false" />
    <button id="searchButton">
      <i class='bx bx-search-alt-2'></i>
    </button>
    `;
  }
}

customElements.define('search-bar', SearchBar);
