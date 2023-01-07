class NewReview extends HTMLElement {
  constructor() {
    super();
    this.show();
  }

  show() {
    this.innerHTML = `
      <h3 tabindex="0">Add New Review</h3>
      <form id="to-add">
        <div class="form-element">
          <label for="reviewer-name">Name:</label><br />
          <input type="text" id="reviewer-name" /><br />
        </div>
        <div class="form-element">
          <label for="review">Description:</label><br />
          <textarea id="review" rows="8"></textarea><br />
        </div>
        <input id="submit" type="submit" value="ADD" />
      </form>
    `;
  }
}

customElements.define('new-review', NewReview);
