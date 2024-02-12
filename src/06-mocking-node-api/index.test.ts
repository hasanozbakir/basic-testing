// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
// import * as fs from 'fs';
import * as path from 'path';

jest.mock('fs', () => ({
  existsSync: jest.fn(),
  promises: {
    readFile: jest.fn(),
  },
}));

jest.mock('path', () => ({ 
  join: jest.fn(),
}));

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  }); 

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    const callback = jest.fn();
    const spySetTimeout = jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(callback, 1000);
    expect(spySetTimeout).toHaveBeenCalledWith(callback, 1000)
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    const callback = jest.fn();
    doStuffByTimeout(callback, 1000);
    jest.runAllTimers(); 
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    const callback = jest.fn();
    const spySetInterval = jest.spyOn(global, 'setInterval');

    doStuffByInterval(callback, 1000);
    expect(spySetInterval).toHaveBeenCalledWith(callback, 1000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    const callback = jest.fn();
    doStuffByInterval(callback, 1000);
    jest.advanceTimersByTime(3000); 
    expect(callback).toHaveBeenCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  const mockPathJoin = path.join as jest.MockedFunction<typeof path.join>;

  test('should call join with pathToFile', async () => {
    // Write your test here
    const pathToFile = 'test.txt';
    mockPathJoin.mockReturnValue('fake/path/to/test.txt');
    await readFileAsynchronously(pathToFile);
    expect(mockPathJoin).toHaveBeenCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    // mockFsExistsSync.mockReturnValue(false);
    const mockPathJoin = path.join as jest.Mock;
    mockPathJoin.mockImplementation((...args) => args.join('/'));

    const result = await readFileAsynchronously('nonexistent.txt');
    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
