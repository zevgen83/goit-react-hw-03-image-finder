import axios from 'axios';

const API_KEY = '31996403-8756c258c06c01931ffa2e280';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function fetchApi(nameImg, page, perPage) {
  return axios({
    params: {
      key: API_KEY,
      q: nameImg,
      page: page,
      per_page: perPage,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
}
