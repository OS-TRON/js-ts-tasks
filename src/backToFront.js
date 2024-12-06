/**
 * Скопировать и вставить определенное количество символов строки в начало и конец строки
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  const start = str.slice(0, symbolsCount);
  const end = str.slice(-symbolsCount);

  return end + str + start;
};
