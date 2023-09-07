// Please do not change the name of this function
function sentenceToCamelCase(sentence, boolean) {
  let whiteSpaceArray = []
  if (boolean === true) {
    const sentenceArray = sentence.split("");
    for (let i = 0; i < sentenceArray.length; i++) {
      if (sentenceArray[i] === " ") {
        whiteSpaceArray.push(i);
      }
    }
    sentenceArray[0] = sentenceArray[0].toUpperCase();

    for (let i = 0; i < whiteSpaceArray.length; i++) {
      sentenceArray[whiteSpaceArray[i] + 1] =
        sentenceArray[whiteSpaceArray[i] + 1].toUpperCase();
    }

    const newSentence = sentenceArray.filter((x) => x !== " ");
    const upperCamelSentence = newSentence.join("");
    return upperCamelSentence;
  }

  if (boolean === false) {
    const sentenceArray = sentence.split("");
    for (let i = 0; i < sentenceArray.length; i++) {
      if (sentenceArray[i] === " ") {
        whiteSpaceArray.push(i);
      }
    }
    sentenceArray[0] = sentenceArray[0].toLowerCase();

    for (let i = 0; i < whiteSpaceArray.length; i++) {
      sentenceArray[whiteSpaceArray[i] + 1] =
        sentenceArray[whiteSpaceArray[i] + 1].toUpperCase();
    }

    const newSentence = sentenceArray.filter((x) => x !== " ");
    const lowerCamelSentence = newSentence.join("");
    return lowerCamelSentence;
  }
}

module.exports = {sentenceToCamelCase};

