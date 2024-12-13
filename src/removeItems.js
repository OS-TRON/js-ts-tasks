/**
 * Write a function which removes from given array items are equal a given value
 * Функция, которая удаляет из данного массива элементы, равные заданному значению
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      result.push(arr[i]);
    }
  }

  return result;
};
