const { promisify } = require('util');
const fs = require('fs');
const { join } = require('path');
const writeFile = promisify(require('fs').writeFile);
const logger = require('./logger');

const imageDir = 'images';

// eslint-disable-next-line arrow-parens
const saveImage = async blendImage => {
  logger('→ Saving image...');

  // Save file with unique name
  const savingPath = join(
    process.cwd(),
    `${imageDir}/saved-image-${new Date().valueOf()}.jpg`
  );

  // Create image dir if not availbe
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir);
  }

  try {
    await writeFile(savingPath, blendImage);
    return savingPath;
  } catch (error) {
    logger(`⤬ Saving image failded: ${error.message}`);
    return null;
  }
};

module.exports = saveImage;
