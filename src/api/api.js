import axios from 'axios';

const API_KEY = 'I2K8kPab4SaWDK24ieiuryCp8ontUr0u';
const API_URL = 'https://api.giphy.com/v1/gifs/search';

async function searchGifs(query) {
  const response = await axios.get(API_URL, {
    params: {
      q: query,
      api_key: API_KEY,
      limit: 10,
    },
  });
  return response.data.data;
}

export default {searchGifs};
