'use strict';

let originCWD;
const mockCWD = jest.fn(() => 'somePath');
beforeAll(() => {
  originCWD = global.process.cwd;
  global.process.cwd = mockCWD;
});

afterAll(() => {
  global.process.cwd = originCWD;
});

jest.mock('path', () => {
  return {
    join: jest.fn((a, b) => a + '/' + b)
  };
});

const mockWrite = jest.fn((path, file, cb) => cb(null));
jest.mock('node-yaml', () => {
  return {
    write: mockWrite
  };
});

const aGoodIcon = {
  id: 'ic_good',
  svg: 'goodsvg',
  svgIds: ['a']
};

const aBadIcon = {
  id: 'ic_bad1',
  error: ['bad error 1', 'bad error 1-second'],
  svgIds: ['b']
};

const aSecondBadIcon = {
  id: 'ic_bad2',
  error: ['bad error 2'],
  svgIds: ['b']
};

const writeToken = require('../lib/writeToken');

test('write token works when there are no errors', async () => {
  const icons = [aGoodIcon];
  await writeToken(icons);
  expect(mockWrite).toHaveBeenCalledTimes(1);
  expect(mockWrite.mock.calls[0][0]).toBe('somePath/token.yml');
  expect(mockWrite.mock.calls[0][1]).toEqual({
    global: { category: 'icon', platform: 'core', type: 'icon' },
    props: {
      ic_good: {
        value: 'goodsvg'
      },
      iconSize: { value: '24px' }
    }
  });
});

test('write token errors but goes through all files and checks ids', async () => {
  const icons = [aBadIcon, aGoodIcon, aSecondBadIcon];
  try {
    await writeToken(icons);
  } catch (err) {
    expect(mockWrite).not.toHaveBeenCalled();
    expect(err).toEqual(
      'bad error 1\nbad error 1-second\nbad error 2\n\tthere are duplicate ids:\n\t\tb'
    );
    return;
  }

  throw 'write Token did not error';
});
