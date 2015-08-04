var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
  postcss([ plugin(opts) ]).process(input).then(function (result) {
    expect(result.css).to.eql(output);
    expect(result.warnings()).to.be.empty;
    done();
  }).catch(function (error) {
    done(error);
  });
};

describe('postcss-imperial', function () {
  it('supports fathoms', function (done) {
    test(
      'a{ height: 1fathom; width: 2fathoms; perspective: 1.5ftm }',
      'a{ height: 72in; width: 144in; perspective: 108in }',
      {}, done);
  });
  it('supports twips', function (done) {
    test(
      'a{ letter-spacing: 1twip; font-size: 240twips }',
      'a{ letter-spacing: 0.05pt; font-size: 12pt }',
      {}, done);
  });
});
