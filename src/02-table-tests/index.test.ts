// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  // continue cases for other actions 
  { a: 4, b: 3, action: Action.Subtract, expected: 1 },
  { a: 4, b: 4, action: Action.Subtract, expected: 0 },
  { a: 4, b: 5, action: Action.Subtract, expected: -1 },
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 4, b: 3, action: Action.Multiply, expected: 12 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 2, b: 4, action: Action.Divide, expected: 0.5 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 2, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 2, b: -1, action: Action.Exponentiate, expected: 0.5 },
  { a: 2, b: 3, action: 'unknown', expected: null },
  { a: 'not a number', b: 2, action: Action.Add, expected: null },
  { a: 2, b: 'not a number', action: Action.Add, expected: null },
  { a: 'not a number', b: 'not a number', action: Action.Add, expected: null },   
]; 

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  // test('should blah-blah', () => {
  //   expect(true).toBe(true);
  // });
  // Consider to use Jest table tests API to test all cases above
  test.each(testCases)(
    'given inputs $a, $b with action $action, expects $expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
