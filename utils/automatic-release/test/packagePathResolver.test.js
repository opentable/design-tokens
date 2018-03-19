const packagePathResolver = require('../packagePathResolver');

test('return correct package path', () => {
  expect(packagePathResolver('ottheme-colors')).toBe('OTTheme/ottheme-colors');
  expect(packagePathResolver('otkit-borders')).toBe('OTKit/otkit-borders');
});
