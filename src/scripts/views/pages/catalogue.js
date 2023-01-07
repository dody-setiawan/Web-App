import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import SearchInitiator from '../../utils/search-initiator';

const Catalogue = {
  async render() {
    return `
      <div class="content">
        <hero-image></hero-image>
        <search-bar></search-bar>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const result = await TheRestaurantDbSource.list();
    if (result !== undefined) {
      const loadingElement = document.querySelector('loading-display');
      loadingElement.classList.add('hide');
      if (typeof (result) === 'string') {
        const errorElement = document.createElement('error-display');
        errorElement.errorMessage = result;
        document.body.appendChild(errorElement);
      }
      const restaurantsContainer = document.querySelector('#restaurants');
      result.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      const searchButton = document.querySelector('#searchButton');
      searchButton.addEventListener('click', () => {
        const inputUser = document.querySelector('#searchInput');
        SearchInitiator.init(inputUser.value);
      });
      const skipLinkElement = document.getElementById('skip-link');
      const skipElement = document.getElementById('skip-to-content');
      skipLinkElement.addEventListener('focus', () => {
        skipElement.style.opacity = 1;
        skipElement.style.zIndex = 30;
      });
      skipLinkElement.addEventListener('blur', () => {
        skipElement.style.opacity = 0;
        skipElement.style.zIndex = 1;
      });
    }
  },
};

export default Catalogue;
