import CONFIG from '../../globals/config';
import '../components/customer-review';

const createRestaurantDetailTemplate = (restaurant) => {
  const customerReviewsContainer = document.createElement('div');
  customerReviewsContainer.classList.add('restaurant__review__customer-review');
  restaurant.customerReviews.forEach((review) => {
    const reviewElement = document.createElement('customer-review');
    reviewElement.customerReview = review;
    customerReviewsContainer.appendChild(reviewElement);
  });
  const customerReviews = customerReviewsContainer.innerHTML;

  const rowContainer = document.createElement('tr');
  const foodsListElement = document.createElement('td');
  foodsListElement.classList.add('foodsList');
  foodsListElement.setAttribute('tabindex', 0);
  restaurant.menus.foods.forEach((food) => {
    foodsListElement.innerHTML += `${food.name}<br>`;
  });
  rowContainer.appendChild(foodsListElement);
  const drinksListElement = document.createElement('td');
  drinksListElement.classList.add('drinksList');
  drinksListElement.setAttribute('tabindex', 0);
  restaurant.menus.drinks.forEach((drink) => {
    drinksListElement.innerHTML += `${drink.name}<br>`;
  });
  rowContainer.appendChild(drinksListElement);
  const rowTable = rowContainer.innerHTML;

  const restaurantDetailTemplate = `
    <h2 tabindex="0" class="restaurant__name">${restaurant.name}</h2>
    <img tabindex="0" class="restaurant__poster" src="${CONFIG.MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h3 tabindex="0">Information</h3>
      <h4 tabindex="0" >Rating: </h4><p class="info" tabindex="0">${restaurant.rating}</p>
      <h4 tabindex="0">City: </h4><p class="info" tabindex="0">${restaurant.city}</p>
      <h4 tabindex="0">Address: </h4><p class="info" tabindex="0">${restaurant.address}</p>
      <h4 id="desc" tabindex="0">Description</h4>
      <p tabindex="0">${restaurant.description}</p>
      <h4 tabindex="0" id="menu">Menu</h4>
      <table id="menuList">
        <tr>
          <th tabindex="0">Foods</th>
          <th tabindex="0">Drinks</th>
        </tr>
        ${rowTable}
      </table>
    </div>
    <div class="restaurant__review">
      <h3 tabindex="0">Review</h3>
      <div id="reviewContainer">
        ${customerReviews}
      </div>
      <new-review></new-review>
    </div>
  `;

  return restaurantDetailTemplate;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img tabindex="0" class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.SMALL_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__city">
        <p tabindex="0">${restaurant.city}</p>
      </div>
      <div class="restaurant-item__header__rating">
        <p tabindex="0">⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    </div>
  </div>
`;

const createFavoriteButtonTemplate = `
  <button aria-label="favorite this restaurant" id="favoritButton" class="favorite">
    <i class='bx bx-heart' ></i>
  </button>
`;

const createFavoritedButtonTemplate = `
  <button aria-label="not favorite this restaurant" id="favoritedButton" class="favorite">
    <i class='bx bxs-heart'></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
