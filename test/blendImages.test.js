jest.mock('../utils/bindImages');

const bindImages = require('../utils/bindImages');

// Test bind image
test('returns the fetched image buffer', () => {
  bindImages().then(bindedImage =>
    expect(bindedImage).toStrictEqual(
      Buffer.from(
        'ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 49 46 00 01 01 0',
        'utf8'
      )
    )
  );
});
