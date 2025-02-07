/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  if (from === to) {
    return Number(value.toFixed(2));
  }
  const conversionMap: { [key: string]: (num: number) => number } = {
    C_K: num => num + 273.15,
    K_C: num => num - 273.15,
    m_mi: num => num * 0.0006213711,
    mi_m: num => num / 0.0006213711,
    gr_pound: num => num * 0.002204624,
    pound_gr: num => num / 0.002204624,
  };

  const key = `${from}_${to}`;
  const convertFn = conversionMap[key];

  if (convertFn) {
    return Number(convertFn(value).toFixed(2));
  }
  return value;
};
