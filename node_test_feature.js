import test from 'node:test';

test('Example test', t => {
  t.plan(3); // Plan the number of assertions in this test

  const value1 = 5;
  const value2 = 10;
  
  t.equal(value1 + value2, 15, 'Sum should be 15');
  t.ok(value1 < value2, 'Value1 should be less than Value2');
  t.deepEqual([1, 2, 3], [1, 2, 3], 'Arrays should be deeply equal');
});
