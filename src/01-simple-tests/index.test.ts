// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 10, b: 5, action: Action.Add })).toBe(15);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 10, b: 8, action: Action.Subtract })).toBe(2);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 5, b: 3, action: Action.Multiply })).toBe(15);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 6, b: 3, action: Action.Divide })).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 3, b: 2, action: Action.Exponentiate })).toBe(9);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 5, action: 'unknown' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(simpleCalculator({ a: 'not a number', b: 3, action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 2, b: 'not a number', action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 'not a number', b: 'not a number', action: Action.Add })).toBeNull();
  });
});
