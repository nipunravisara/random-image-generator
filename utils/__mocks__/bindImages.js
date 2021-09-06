const bindImages = () =>
  Promise.resolve(
    Buffer.from(
      'ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 49 46 00 01 01 0',
      'utf8'
    )
  );

module.exports = bindImages;
