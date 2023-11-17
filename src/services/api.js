import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '39697494-c4b1e462fd481af5f94407ae2';

export const fetchImages = async (request, page) => {
  const response = await axios.get(
    `?key=${KEY}&per_page=12&image_type=photo&orientation=horizontal&q=${request}&page=${page}`
  );

  return response.data;
};
