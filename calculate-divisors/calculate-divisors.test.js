const calculateDivisors = require('./calculate-divisors')

describe('calculateDivisors()', () => {
  xtest('one', () => {
    const input = 1 ;
    const output = calculateDivisors(input);
    const expected = 0;

    expect(output).toEqual(expected); 
  });

  xtest('five', () => {
    const input = 5 ;
    const output = calculateDivisors(input);
    const expected = 3;

    expect(output).toEqual(expected); 
  });
  xtest('six', () => {
    const input = 6;
    const output = calculateDivisors(input);
    const expected = 8;

    expect(output).toEqual(expected); 
  });
  xtest('ten', () => {
    const input = 10 ;
    const output = calculateDivisors(input);
    const expected = 23;

    expect(output).toEqual(expected); 
  });
  xtest('thirtythree', () => {
    const input = 12 ;
    const output = calculateDivisors(input);
    const expected = 33;

    expect(output).toEqual(expected); 
  });
});
