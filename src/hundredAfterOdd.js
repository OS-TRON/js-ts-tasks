/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * Напиши функцию, которая в данном массиве чисел вставляет число 100 после каждого нечетного числа.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);

    if (arr[i] % 2 !== 0) {
      result.push(100);
    }
  }

  return result;
};
