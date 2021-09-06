const { promisify } = require('util');
const blend = promisify(require('@mapbox/blend'));
const { logger } = require('./logger');

const blendImage = async (image1, image2, width, height) => {
  logger('→ Binding images...');

  try {
    // Bind images
    const blendParams = [
      { buffer: Buffer.from(image1), x: 0, y: 0 },
      { buffer: Buffer.from(image2), x: width, y: 0 },
    ];

    const blendConfig = {
      width: width * 2,
      height,
      format: 'jpeg',
    };

    const data = await blend(blendParams, blendConfig);
    return data;
  } catch (error) {
    return null;
  }
};

module.exports = {
  blendImage,
};
