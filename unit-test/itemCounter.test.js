import itemCount from '../src/modules/itemCounter.js';

describe('coutItem', () => {
  test('Test 1', () => {
    const list1 = [1, 2, 3];
    const result = itemCount(list1);
    expect(result).toBe(3);
  });

  test('Test 1', () => {
    const list2 = [];
    const result = itemCount(list2);
    expect(result).toBe(0);
  });
});