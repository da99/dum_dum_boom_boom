/* jshint strict: true, undef: true */
/* globals exports */

exports.is_positive = is_positive;
function is_positive(v) {

  return typeof v === 'number' && isFinite(v) && v > 0;
}
