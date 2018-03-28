const diffToSemver = require('../lib/defineVersion/diffToSemver');

test('return undefined when no change', () => {
  expect(
    diffToSemver(
      { color: '#000000', bg: '#000000' },
      { bg: '#000000', color: '#000000' }
    )
  ).toBeUndefined();
});

test("return 'major' when there is a breaking change on current keys", () => {
  expect(
    diffToSemver(
      { color: '#000000', bg: '#000000' },
      { supercolor: '#000000', bg: '#000000' }
    )
  ).toBe('major');

  expect(
    diffToSemver({ color: '#000000', bg: '#000000' }, { bg: '#000000' })
  ).toBe('major');
});

test("return 'minor' new keys are added", () => {
  expect(
    diffToSemver(
      { color: '#000000' },
      { color: '#000000', supercolor: '#000000' }
    )
  ).toBe('minor');
});

test("return 'patch' new values are changed", () => {
  expect(
    diffToSemver(
      { color: '#000000', bg: '#000000' },
      { bg: '#000000', color: '#000001' }
    )
  ).toBe('patch');
});
