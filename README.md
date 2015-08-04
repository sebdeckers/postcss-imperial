# PostCSS Imperial [![Build Status][ci-img]][ci]

[PostCSS] plugin to support lengths in Imperial and customary units.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/cbas/postcss-imperial.svg
[ci]:      https://travis-ci.org/cbas/postcss-imperial

```css
.foo {
  /* Input example */
  height: 1cubit;
  width: 2shaftments;
  background-position: 2digits 1palm;
  padding: 2hands 3sticks;
  border-width: 5barleycorns;
  font-size: 2poppyseeds;
}
```

```css
.foo {
  /* Output example */
  height: 18in;
  width: 12in;
  background-position: 1.5in 3in;
  padding: 8in 6in;
  border-width: 10pc;
  font-size: 12pt;
}
```

## Usage

```js
postcss([ require('postcss-imperial') ])
```

See [PostCSS] docs for examples for your environment.
