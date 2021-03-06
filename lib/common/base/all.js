/* jshint strict: true, undef: true */
/* globals and, length */
/* globals exports */

exports.all = all;
function all(_funcs) {
  var _and = and.apply(null, arguments);
  return function (arr) {
    for(var i = 0; i < length(arr); i++){
      if (!_and(arr[i]))
        return false;
    }
    return true;
  };
}
