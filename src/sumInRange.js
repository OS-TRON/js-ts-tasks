/**
 * Найдите сумму в диапазоне последовательных чисел
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let total = 0;

  if (end < start) {
    [start, end] = [end, start];
  }

  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
};
