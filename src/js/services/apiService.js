const axios = require('axios').default;

class ApiService {
  #API_KEY = '25741078-4fc96325b71ca39b2d0ebb27c';
  static BASE_URL = 'https://pixabay.com/api/';
  #page = 1;

  constructor({ inputValue }) {
    this.query = inputValue;
  }

  async fetchPhotos() {
    try {
      const queryParams = new URLSearchParams({
        key: this.#API_KEY,
        q: this.query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.#page,
        per_page: 40,
      });
      const response = await axios.get(`${ApiService.BASE_URL}?${queryParams}`);
      console.log(response);
      const dataObj = await response.data;
      const photos = await dataObj.hits;
      return photos;
    } catch (error) {
      console.error(error);
    }
  }

  // fetchPhotos() {
  //   const queryParams = new URLSearchParams({
  //     key: this.#API_KEY,
  //     q: this.query,
  //     image_type: 'photo',
  //     orientation: 'horizontal',
  //     safesearch: true,
  //     page: this.#page,
  //     per_page: 40,
  //   });

  //   return fetch(`${ApiService.BASE_URL}?${queryParams}`).then(res => {
  //     if (res.status === 404) {
  //       return Promise.reject(new Error('Not found'));
  //     }
  //     return res.json();
  //   });
  // }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }
}

// // Make a request for a user with a given ID
// axios
//   .get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// // Optionally the request above could also be done as
// axios
//   .get('/user', {
//     params: {
//       ID: 12345,
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

export default ApiService;
