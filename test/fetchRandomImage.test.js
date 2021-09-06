jest.mock('../utils/fetchRandomImage');

const fetchRandomImage = require('../utils/fetchRandomImage');

// Test fetch image
test('returns the fetched image buffer', () => {
  fetchRandomImage().then(fetchedImage =>
    expect(fetchedImage).toStrictEqual(
      Buffer.from(
        'ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00',
        'utf8'
      )
    )
  );
});
