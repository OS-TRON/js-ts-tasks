/**
 * Сравните два числа
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return `${firstNumber} > ${secondNumber}`;
  } else if (firstNumber < secondNumber) {
    return `${firstNumber} < ${secondNumber}`;
  } else {
    return `${firstNumber} = ${secondNumber}`;
  }
};
