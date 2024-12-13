/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * Вычислить расстояние между двумя точками, представленными в стандартной декартовой системе координат.
 * with precision 2 decimal places
 * С точностью до 2 знаков после запятой.
 * Each Point represented by object contains two property (X and Y)
 * Каждая точка представлена объектом, содержащим два свойства: X и Y.
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const x = secondPoint.X - firstPoint.X;
  const y = secondPoint.Y - firstPoint.Y;

  const dist = Math.sqrt(x * x + y * y);

  return Number(dist.toFixed(2));
};
