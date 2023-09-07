const {changeCalculator} = require('./change-calculator')

describe('changeCalculator', () => {
    test('returns correct change when passed a one number', () => {
      const input = 1 ;
      const output = changeCalculator(input);
      const expected = {'1':1};
      expect(output).toEqual(expected); 
    });
    test('correctly returns the key name when the passed number is not equal to quantity', () => {
      const input = 2 ;
      const output = changeCalculator(input);
      const expected = {'2':1};
      expect(output).toEqual(expected); 
    });
    test('returns correct values when multiple iterations are required', () => {
      const input = 7 ;
      const output = changeCalculator(input);
      const expected = {'5':1,'2':1};
      expect(output).toEqual(expected); 
    });
    test('returns correct values when multiple digit numbers are passed', () => {
      const input = 13;
      const output = changeCalculator(input);
      const expected = {'10':1,'2':1,'1':1};
      expect(output).toEqual(expected); 
    });
})