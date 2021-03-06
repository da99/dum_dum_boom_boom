/* jshint strict: true, undef: true */
/* globals _, spec, reduce, be, is_string, not, is_empty */
/* globals exports */

spec(key_to_bool, ['time', {time: 'morning'}], true); // it 'returns true if key is "truthy"'
spec(key_to_bool, ['!time', {time: false}], true); // it 'returns true if: !key , key is !truthy'
spec(key_to_bool, ['!first.second.third', {first: {second: { third: true}}}], true); // it 'handles nested keys'
spec(key_to_bool, ['!!!first', {first: false}], true); // it 'handles multiple exclamation marks'
spec(key_to_bool, ['first', {}], undefined); // it 'returns undefined if one non-nested key is specified, but not found'
spec(key_to_bool, ['is_factor', {is_factor: true}], true);
spec(key_to_bool, ['!is_factor', {is_factor: false}], true);
spec(key_to_bool, ['is_factor', {is_ruby: false}], undefined);
spec(key_to_bool, ['is_happy', {is_happy: true}], true);
spec(key_to_bool, ['!is_happy', {is_happy: true}], false);
spec(key_to_bool, ['is_happy',  {is_happy: false}], false);
spec(key_to_bool, ['!is_happy', {is_happy: false}], true);
spec(key_to_bool, [['is_factor'], {}], new Error("[\"is_factor\"] should be: is_string (function)"));

exports.key_to_bool = key_to_bool;
function key_to_bool(raw_key, data) {

  var FRONT_BANGS = /^\!+/;

  var key = reduce(
    raw_key,
    be(is_string),
    _.trim,
    be(not(is_empty))
  );

  var bang_match = key.match(FRONT_BANGS);
  var dots       = ( bang_match ? key.replace(bang_match[0], '') : key ).split('.');
  var keys       = _.map( dots, _.trim );

  var current = data;
  var ans  = false;

  _.find(keys, function (key) {
    if (_.has(current, key)) {
      current = data[key];
      ans = !!current;
    } else {
      ans = undefined;
    }

    return !ans;
  });

  if (ans === undefined)
    return ans;

  if (bang_match) {
    _.times(bang_match[0].length, function () {
      ans = !ans;
    });
  }

  return ans;
} // === func
