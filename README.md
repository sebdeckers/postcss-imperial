# PostCSS Imperial [![Build Status][ci-img]][ci]
[PostCSS] plugin to support lengths in Imperial and customary units.

Inspired by [Are Imperial Measurements outdated? | Number Hub with Matt Parker | Head Squeeze](https://www.youtube.com/watch?v=r7x-RGfd0Yk).

![Unit relations graph](https://upload.wikimedia.org/wikipedia/commons/c/c8/English_length_units_graph.png)

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/cbas/postcss-imperial.svg
[ci]:      https://travis-ci.org/cbas/postcss-imperial

## Input
```css
.poster {
  height: 2ft;
  width: 1yd;
}
```

## Output
```css
.poster {
  height: 24in;
  width: 36in;
}
```

## Usage
```js
postcss([ require('postcss-imperial') ])
```

See [PostCSS] docs for examples for your environment.

## Supported Units
- thou (th, mil)
- twip
- point (pt)
- line, poppyseed
- pica (pc)
- barleycorn
- digit
- finger
- inch (in)
- stick
- nail
- palm
- hand
- shaftment
- link
- span
- foot (ft)
- cubit
- pace
- yard (yd)
- ell
- grade, step
- fathom (ftm)
- rod, pole, perch
- rope
- chain
- ramsdenschain
- shackle
- skein
- cable
- furlong (fur)
- romanmile
- mile (mi)
- nauticalmile
- league (lea)
- spindle

### Notes
1. Plurals are supported for convenience.
1. The `ch` abbreviation is not supported since it already exists in CSS.

## References
- https://en.wikipedia.org/wiki/English_units#Length
- https://en.wikipedia.org/wiki/Imperial_units#Length
