/**
 * Write a function which finds a maximal common substring of two given strings
 * Напишите функцию, которая находит максимальную общую подстроку для двух заданных строк.
 * example
 * Пример:
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * Ответ: 'gabcdef' — общая подстрока для обеих строк
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let masubstr = '';

  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      let substr = str1.slice(i, j);

      if (str2.includes(substr) && substr.length > masubstr.length) {
        masubstr = substr;
      }
    }
  }

  return masubstr;
};
