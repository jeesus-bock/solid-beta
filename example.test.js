// example.test.js
import { expect, test, describe } from 'vitest';

describe('<TodoList />', () => {
  test('Math.sqrt()', () => {
    expect(Math.sqrt(4)).toBe(2);
    expect(Math.sqrt(144)).toBe(12);
    expect(Math.sqrt(2)).toBe(Math.SQRT2);
  });
});
