// Please do not change the name of this function
function dnaPairs(dna) {
  let finalPairs = [];
  const dnaArray = dna.split('')
  for (let i=0; i<dnaArray.length; i++){
    if (dnaArray[i] === 'G'){
      finalPairs.push([dnaArray[i], 'C'])
    }
    if (dnaArray[i] === 'C'){
      finalPairs.push([dnaArray[i], 'G'])
    }
    if (dnaArray[i] === 'A'){
      finalPairs.push([dnaArray[i], 'T'])
    }
    if (dnaArray[i] === 'T'){
      finalPairs.push([dnaArray[i], 'A'])
    }
  }
  return finalPairs
}

module.exports = dnaPairs;



//empty array at the top finalPairs
//splits string into string array
//check if its dna??
// for loop, 
// if A finalPairs.push(array[i], "T") etc
// return finalPairs 