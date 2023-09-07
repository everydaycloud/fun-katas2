const {sentenceToCamelCase} = require('./sentence-to-camel-case')

describe('sentenceToCamelCase', () => {
    test('returns upper camel case sentence when true', () => {
      const input1 = "this sentence" ;
      const input2 = true;
      const output = sentenceToCamelCase(input1, input2);
      const expected = "ThisSentence";
      expect(output).toEqual(expected); 
    });
    test('returns lower camel case sentence when false', () => {
      const input1 = "this sentence" ;
      const input2 = false;
      const output = sentenceToCamelCase(input1, input2);
      const expected = "thisSentence";
      expect(output).toEqual(expected); 
    });
    test('returns correct case when sentence is longer', () => {
      const input1 = "This Bigger strange Sentence" ;
      const input2 = true;
      const output = sentenceToCamelCase(input1, input2);
      const expected = "ThisBiggerStrangeSentence";
      expect(output).toEqual(expected); 
    });
    test('returns correct lower case when sentence starts with an upper case', () => {
      const input1 = "This Bigger strange Sentence" ;
      const input2 = false;
      const output = sentenceToCamelCase(input1, input2);
      const expected = "thisBiggerStrangeSentence";
      expect(output).toEqual(expected); 
    });
})