import { isNotNull } from '../index.js';

test('Filters nulls correctly', () => {
  const result: Array<number> = [1, 2, null, 4, 5].filter(isNotNull);
  expect(result.length).toBe(4);
});