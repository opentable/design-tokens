let tempDirname;
beforeAll(() => {
  tempDirname = global.__dirname;
  global.__dirname = '.';
});

afterAll(() => {
  global.__dirname = tempDirname;
});

const mockSpawn = jest.fn((cmd, params, options) => {
  if (params[0] === 'run' && params[1] === 'updated') {
    return {
      stdout: {
        on: function(event, cb) {
          cb(
            '- ottheme-colors\n- otkit-borders\n- otkit-breakpoints\n- otkit-colors\n- otkit-icons\n- style-guide (private)'
          );
        }
      },
      on: function(event, cb) {
        cb(0);
      }
    };
  } else {
    return {
      on: function(event, cb) {
        cb(0);
      }
    };
  }
});

jest.mock('cross-spawn', () => {
  return mockSpawn;
});

const mockEnsureDirSync = jest.fn();
const mockWriteJsonSync = jest.fn();
const mockPathExistsSync = jest.fn();
const mockRemoveSync = jest.fn();
jest.mock('fs-extra', () => {
  return {
    ensureDirSync: mockEnsureDirSync,
    writeJsonSync: mockWriteJsonSync,
    pathExistsSync: mockPathExistsSync,
    removeSync: mockRemoveSync
  };
});

const mockJoin = jest.fn((...args) => args.toString());
jest.mock('path', () => {
  return {
    join: mockJoin
  };
});

const mockLoad = jest.fn();
mockLoad
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(2)
  .mockReturnValue(3);
jest.mock('yamljs', () => {
  return {
    load: mockLoad
  };
});

const { checkUPdated, installLatestFromNPM, run } = require('../process');

test('check updated', done => {
  checkUPdated().then(toUpdate => {
    expect(toUpdate).toEqual([
      'ottheme-colors',
      'otkit-borders',
      'otkit-breakpoints',
      'otkit-colors',
      'otkit-icons'
    ]);
    done();
  });
});

test('install latest from NPM', done => {
  const installing = installLatestFromNPM(['ottheme-colors', 'otkit-borders']);
  Promise.all(installing).then(installed => {
    expect(installed).toEqual(['ottheme-colors', 'otkit-borders']);
    done();
  });
});

test('', () => {
  run();
  expect(mockSpawn.mock.calls).toMatchSnapshot();

  expect(mockEnsureDirSync.mock.calls).toMatchSnapshot();
  expect(mockWriteJsonSync.mock.calls).toMatchSnapshot();
  expect(mockPathExistsSync.mock.calls).toMatchSnapshot();
  expect(mockRemoveSync.mock.calls).toMatchSnapshot();

  expect(mockJoin.mock.calls).toMatchSnapshot();

  expect(mockLoad.mock.calls).toMatchSnapshot();
});
