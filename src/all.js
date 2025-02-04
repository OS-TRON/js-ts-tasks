/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
 const resultses = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promisesArray.forEach(async (promisesInArray, index) => {
      try {
        resultses[index] = await promisesInArray;
        count += 1;
        if (count === promisesArray.length) {
          resolve(resultses);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};
