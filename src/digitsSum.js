/**
 * Дано число n (от -1000000 до 1000000). Создайте функцию, которая считает сумму всех цифр
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let str = Math.abs(n).toString();
  let sum = 0;

  for (let char of str) {
    sum += parseInt(char, 10);
  }

  return sum;
};
