// Please do not change the name of this function
function getTweetData (tweet) {
  let tweetObject = {
    tags: [],
    mentions: [],
    tagCount: 0,
    mentionCount: 0,
    length: 0
  }
  
  tweetObject.length = tweet.length;
  const tweetArray = tweet.split(' ');
  const mention = tweetArray.filter((word) => word.includes('@'));
  const tag = tweetArray.filter((word)=> word.includes('#'));

  const ObjMentions = tweetObject.mentions
  for (let i=0; i<mention.length; i++){
    if (!ObjMentions.includes(mention[i])){
      ObjMentions.push(mention[i])
    }
  }

  tweetObject.mentionCount = ObjMentions.length;

  const ObjTags = tweetObject.tags
  for (let i=0; i<tag.length; i++){
  if (!ObjTags.includes(tag[i])){
    ObjTags.push(tag[i])
  }
}

tweetObject.tagCount = ObjTags.length;

  return tweetObject

};

module.exports = getTweetData;

//returns an object containing data from a tweet
//The length of the tweet.
//# of hash tags and an array of them.
//# of mentions and an array of them.
//only unique hash tags and handles mentioned