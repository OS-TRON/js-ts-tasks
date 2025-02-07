/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  const parseInputDate = (dateValue: Date | string): Date => {
    if (typeof dateValue === 'string') {
      const [dayStr, monthStr, yearStr] = dateValue.split('.');
      const day = Number(dayStr);
      const month = Number(monthStr) - 1;
      const year = Number(yearStr);
      return new Date(year, month, day);
    }
    return dateValue;
  };

  const current = parseInputDate(inputDate);
  const newYearDate = new Date(2024, 0, 1);
  const millisecondsDiff = newYearDate.getTime() - current.getTime();

  const daysRemaining = Math.ceil(millisecondsDiff / (1000 * 60 * 60 * 24));

  return daysRemaining;
};
