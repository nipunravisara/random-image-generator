const axios = require('axios');
const { logger } = require('./logger');

const imageApi = axios.create({
  baseURL: 'https://picsum.photos',
  timeout: 5000,
});

const fetchRandomImage = async ({ imageId, width, height }) => {
  logger(`→ Downloading image ${imageId}`);

  try {
    // Fetch random image
    const response = await imageApi.get(`/id/${imageId}/${width}/${height}`, {
      responseType: 'arraybuffer',
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

module.exports = {
  fetchRandomImage,
};
