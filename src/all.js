/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
const { error } = require('lint-staged/lib/figures');
module.exports.all = function all(promisesArray) {
  const results = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promisesArray.forEach(async (promisesArray, index) => {
      try {
        results[index] = await promisesArray;
        count += 1;
        if (count === promisesArray.length) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};
