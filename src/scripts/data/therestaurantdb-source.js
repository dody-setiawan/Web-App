import API_ENDPOINT from '../globals/api-endpoint';
import '../views/components/error-display';

class TheRestaurantDbSource {
  static async list() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error.message;
    }
  }

  static async detail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      return error.message;
    }
  }

  static async search(query) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(query));
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error.message;
    }
  }

  static async review(customerReview) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerReview),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error.message;
    }
  }
}

export default TheRestaurantDbSource;
