/**
 * Write a function which removes from given array items are equal a given value
 * Функция, которая удаляет из данного массива элементы, равные заданному значению
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  return arr.filter(element => element !== value);
};
