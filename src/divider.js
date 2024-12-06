/**
 * Дано число n и число k. Найдите целую часть и остаток от целочисленного деления n на k
 * Верните строку в формате “целая Часть остаток”.
 * Given number n and number k. Find the whole part and the remainder of the integer division of n by k.
 * Return a string formatted "wholePart remainder"
 * @param {number} n - number
 * @param {number} k - number
 * @returns {number}
 */
module.exports.divider = function divider(n, k) {
  let kol = Math.floor(n / k);

  let pol = n % k;

  return `${kol} ${pol}`;
};
