import TheRestaurantDbSource from '../data/therestaurantdb-source';

const NewReviewInitiator = {
  init(newReview) {
    this._newReview = newReview;
    this._render();
  },

  async _render() {
    const result = await TheRestaurantDbSource.review(this._newReview);
    if (typeof (result) === 'string') {
      const errorElement = document.createElement('error-display');
      errorElement.errorMessage = result;
      document.body.appendChild(errorElement);
    }
    alert(result.message);
  },
};

export default NewReviewInitiator;
