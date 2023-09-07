const getTweetData = require('./get-tweet-data')

describe('getTweetData()', () => {
  test('measuringTweetLength', () => {
    const input = "My awesome tweet" ;
    const output = getTweetData(input);
    const expected = { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 } ;

    expect(output).toEqual(expected); 
  });

  test('countingAndStoringMentions', () => {
    const input = "My awesome tweet to @northcoders" ;
    const output = getTweetData(input);
    const expected =  { tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 } ;

    expect(output).toEqual(expected); 
  });
  test('countingAndStoringHahstagsAndMentions', () => {
    const input = "My awesome tweet about #coding to @northcoders" ;
    const output = getTweetData(input);
    const expected = { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 };

    expect(output).toEqual(expected); 
  });
  test('countingAndStoringHashtags', () => {
    const input = "My awesome tweet about #coding" ;
    const output = getTweetData(input);
    const expected = { tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 };

    expect(output).toEqual(expected); 
  });
  test('repeatingHahstagsAndMentions', () => {
    const input = "I am #coding with @northcoders I love #coding and @northcoders" ;
    const output = getTweetData(input);
    const expected = { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 };

    expect(output).toEqual(expected); 
  });
});
