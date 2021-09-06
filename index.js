const args = require('minimist')(process.argv.slice(2));
const { fetchRandomImage } = require('./utils/fetchRandomImage');
const { blendImage } = require('./utils/blendImage');
const { saveImage } = require('./utils/saveImage');
const { logger } = require('./utils/logger');

const init = async () => {
  const {
    firstImageId = 44,
    secondImageId = 55,
    width = 400,
    height = 500,
  } = args;

  try {
    // Get images
    const firstImage = await fetchRandomImage({
      imageId: firstImageId,
      width,
      height,
    });

    const secondImage = await fetchRandomImage({
      imageId: secondImageId,
      width,
      height,
    });

    // Get binded images
    const bindedImage = await blendImage(
      firstImage,
      secondImage,
      width,
      height
    );

    // Save binded image to files
    const savedPath = await saveImage(bindedImage);

    logger(`✓ Image saved to: ${savedPath}`);
  } catch (error) {
    logger(`⤬ Something went wrong: ${error.message}`);
  }
};

init();
