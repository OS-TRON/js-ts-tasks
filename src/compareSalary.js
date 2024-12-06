/**
 * Сравните три зарплаты и найдите разницу между максимальной и минимальной
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  const maxsal = Math.max(firstSalary, secondSalary, thirdSalary);
  const minsal = Math.min(firstSalary, secondSalary, thirdSalary);
  return maxsal - minsal;
};
