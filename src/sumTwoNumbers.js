/**Найдите сумму двух чисел
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let num1 = firstNumber;
  let num2 = secondNumber;

  if (typeof firstNumber === 'string') {
    num1 = firstNumber.replace(/\s/g, '');
  }
  if (typeof secondNumber === 'string') {
    num2 = secondNumber.replace(/\s/g, '');
  }
  return Number(num1) + Number(num2);
};
