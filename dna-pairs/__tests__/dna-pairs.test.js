const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {

  xtest('oneLetterDNAString', () => {
    const input = "G" ;
    const output = dnaPairs(input);
    const expected =  [["G", "C"]] ;

    expect(output).toEqual(expected); 
  });
  xtest('twoLetterDNAString', () => {
    const input = "AG" ;
    const output = dnaPairs(input);
    const expected = [ ["A", "T"], ["G", "C"] ] ;

    expect(output).toEqual(expected); 
  });
  xtest('fourLetterString', () => {
    const input = "ATAG" ;
    const output = dnaPairs(input);
    const expected = [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ] ;

    expect(output).toEqual(expected); 
  });
});
