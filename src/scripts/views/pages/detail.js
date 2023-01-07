import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import NewReviewInitiator from '../../utils/new-review-initiator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const result = await TheRestaurantDbSource.detail(url.id);
    if (result !== undefined) {
      const loadingElement = document.querySelector('loading-display');
      loadingElement.classList.add('hide');
      if (typeof (result) === 'string') {
        const errorElement = document.createElement('error-display');
        errorElement.errorMessage = result;
        document.body.appendChild(errorElement);
      }
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(result);

      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant: {
          id: result.id,
          name: result.name,
          pictureId: result.pictureId,
          city: result.city,
          rating: result.rating,
        },
      });

      const addForm = document.querySelector('#to-add');
      addForm.addEventListener('submit', () => {
        const reviewerName = document.querySelector('#reviewer-name').value;
        const reviewTeks = document.querySelector('#review').value;
        const newReview = {
          id: result.id,
          name: reviewerName,
          review: reviewTeks,
        };
        NewReviewInitiator.init(newReview);
      });
    }
  },
};

export default Detail;
