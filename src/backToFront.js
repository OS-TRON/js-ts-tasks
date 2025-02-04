/**
 * Скопировать и вставить определенное количество символов строки в начало и конец строки
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (str.length < symbolsCount) {
    return str;
  }
  const suffix = str.slice(-symbolsCount);
  return suffix + str + suffix;
};
