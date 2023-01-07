import TheRestaurantDbSource from '../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../views/templates/template-creator';

const SearchInitiator = {
  init(input) {
    this._input = input;
    this._render();
  },

  async _render() {
    const result = await TheRestaurantDbSource.search(this._input);
    const restaurantsContainer = document.querySelector('#restaurants');
    if (typeof (result) === 'string') {
      const errorElement = document.createElement('p');
      errorElement.innerHTML = result;
      restaurantsContainer.appendChild(errorElement);
    }
    restaurantsContainer.innerHTML = '';
    result.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};

export default SearchInitiator;
