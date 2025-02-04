/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * Функция «Напиши», которая внутри заданного массива подсчитывает количество различных элементов
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const uniqueElems = new Set(arr);
  return uniqueElems.size;
};
