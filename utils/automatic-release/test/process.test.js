const mockRunCmd = jest.fn((script, commands) => {
  if (commands[0] === 'node_modules/.bin/lerna' && commands[1] === 'ls') {
    return Promise.resolve(
      JSON.stringify([
        { name: 'ottheme-colors', private: false },
        { name: 'otkit-borders', private: false },
        { name: 'otkit-breakpoints', private: false },
        { name: 'otkit-colors', private: false },
        { name: 'otkit-icons', private: false },
        { name: 'style-guide', private: true }
      ])
    );
  }
  return Promise.resolve();
});

jest.mock('../lib/runCmd', () => {
  return mockRunCmd;
});

const mockEnsureDirSync = jest.fn();
const mockWriteJsonSync = jest.fn();
const mockPathExistsSync = jest.fn(() => true);
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
  .mockReturnValueOnce({ props: { color: '#000' } })
  .mockReturnValueOnce({ props: { color: '#001' } })
  .mockReturnValueOnce({ props: { color: '#003' } })
  .mockReturnValueOnce({ props: { bgcolor: '#004' } })
  .mockReturnValueOnce({ props: { color: '#005', supercolor: '#005b' } })
  .mockReturnValueOnce({ props: { color: '#005' } })
  .mockReturnValue({ props: { supercolor: '#007' } });

jest.mock('yamljs', () => {
  return {
    load: mockLoad
  };
});

const mockLog = jest.fn();
jest.mock('console', () => {
  return {
    log: mockLog
  };
});

let origDirname;
let origiLog;
beforeAll(() => {
  origDirname = global.__dirname;
  global.__dirname = '.';

  origiLog = global.console.log;
  global.console.log = mockLog;
});

afterAll(() => {
  global.__dirname = origDirname;
  global.console.log = origiLog;
});

const getTokenList = require('../lib/getTokenList');
const installLatestFromNPM = require('../lib/installPackages');
const run = require('../lib/process');

test('Get tokens list', async () => {
  const tokens = await getTokenList();
  expect(tokens).toEqual([
    'ottheme-colors',
    'otkit-borders',
    'otkit-breakpoints',
    'otkit-colors',
    'otkit-icons'
  ]);
});

test('install latest from NPM', async () => {
  const installed = installLatestFromNPM(
    ['ottheme-colors', 'otkit-borders'],
    './tempNpm'
  );
  expect(await installed).toEqual([
    { pkg: 'ottheme-colors', success: true },
    { pkg: 'otkit-borders', success: true }
  ]);
});

jest.mock('../lib/publishPackage', () => () => Promise.resolve());

jest.mock('../lib/versionAddCommitTagPackage', () =>
  jest.fn(() => Promise.resolve())
);

test('automatic-release process', async () => {
  const doPublish = true;
  await run(doPublish);

  const runCmdCalls = mockRunCmd.mock.calls.map(call => {
    call[2]['cwd'] = call[2]['cwd'].substring(
      call[2]['cwd'].indexOf('/utils/') + 1
    );
    return call;
  });
  expect(runCmdCalls).toMatchSnapshot();

  mockEnsureDirSync.mock.calls.forEach(call => {
    expect(call[0]).toContain('./tempNpm');
  });

  mockWriteJsonSync.mock.calls.forEach(call => {
    expect(call[0]).toContain('./tempNpm/package.json');
    expect(call[1]).toEqual({ name: 'release' });
  });

  const pathExistCalls = mockPathExistsSync.mock.calls.map(call => {
    return call[0].substring(call[0].indexOf('/tempNpm') + 1);
  });
  expect(pathExistCalls.length).toBe(5);
  expect(pathExistCalls).toMatchSnapshot();

  expect(mockRemoveSync).toHaveBeenCalledTimes(1);
  expect(mockLoad).toHaveBeenCalledTimes(10);
});
