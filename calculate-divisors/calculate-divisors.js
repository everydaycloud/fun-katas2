// Please do not change the name of this function
function calculateDivisors(num) {
  let counter = 0;
  const multiple3 = Math.floor((num-1)/3);
  const multiple5 = Math.floor((num-1)/5);
  const threesArray = Array.from({length: multiple3}, (v,i) => i);
  const fivesArray = Array.from({length: multiple5}, (v,i) => i);

  for (let i=1; i<=threesArray.length; i++){
    counter += (3 * i);
  }

  for (let i=1; i<=fivesArray.length; i++){
    counter += (5 * i);
  }

  return counter
}

module.exports = calculateDivisors;

