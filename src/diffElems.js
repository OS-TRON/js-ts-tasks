/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * Функция «Напиши», которая внутри заданного массива подсчитывает количество различных элементов
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input');
  }

  const uniElement = new set(arr);

  return uniElement.size;
};
