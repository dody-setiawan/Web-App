class CustomerReview extends HTMLElement {
  constructor() {
    super();
  }

  set customerReview(customerReview) {
    this._customerReview = customerReview;
    this.show();
  }

  show() {
    this.innerHTML = `
    <div class="restaurant-detail_customer-reviews_header">
      <i id="reviewer-icon" class='bx bxs-user-circle'></i>
      <p tabindex="0" class="reviewer-name">${this._customerReview.name}</p>
    </div>
    <div class="restaurant-detail_customer-reviews_content">
      <p tabindex="0" class="review">${this._customerReview.review}</p>
      <p tabindex="0" class="date">${this._customerReview.date}</p>
    </div>
    `;
  }
}

customElements.define('customer-review', CustomerReview);
