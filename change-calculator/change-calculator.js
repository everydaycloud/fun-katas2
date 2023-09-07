// Please do not change the name of this function
function changeCalculator(num) {
  let change = {};
  const availableChange = [20, 10, 5, 2, 1];
  changeCalculatorWorker(num);
  return change;

  function changeCalculatorWorker(num) {
    const usefulNominals = availableChange.filter((x) => x <= num);

    for (let i = 0; i < usefulNominals.length; i++) {
      if (num % usefulNominals[i] === 0) {
        return change[usefulNominals[i].toString()] = num / usefulNominals[i];
      }
      if (num % usefulNominals[i] !== 0) {
        change[usefulNominals[i].toString()] = Math.floor(num / usefulNominals[i]);
        return changeCalculatorWorker(num % usefulNominals[i]);
      }
    }
  }
}

module.exports = {changeCalculator};
