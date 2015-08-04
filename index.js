require('array.prototype.find');
require('array-includes').shim();

var postcss = require('postcss');
var converters = require('./lib/converters');

function translate (value, amount, unit) {
  var convert = converters.find(function (converter) {
    return converter.unit.includes(unit.toLowerCase());
  }, unit);
  return convert.css(parseFloat(amount));
}

module.exports = postcss.plugin('postcss-imperial', function (opts) {
  opts = opts || {};
  return function (css) {
    converters.forEach(function (converter) {
      converter.unit.forEach(function (unit) {
        var pattern = new RegExp('^(\\d+\\.?\\d*)(' + unit + ')$', 'i');
        css.replaceValues(pattern, { fast: unit }, translate);
      });
    });
  };
});
