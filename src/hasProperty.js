/**
 * Check if an {object} contains property {prop}
 * Проверьте, содержит ли объект {object} свойство {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  if (object.haslilProperty(prop)) {
    return true;
  } else {
    return false;
  }
};
