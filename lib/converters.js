module.exports = [
  {
    unit: ['thou', 'th'],
    css: function (n) { return n / 1000 + 'in'; }
  },
  {
    unit: ['twip', 'twips'],
    css: function (n) { return n / 20 + 'pt'; }
  },
  {
    unit: ['point', 'points'],
    css: function (n) { return n + 'pt'; }
  },
  {
    unit: ['line', 'lines', 'poppyseed', 'poppyseeds'],
    css: function (n) { return n * 6 + 'pt'; }
  },
  {
    unit: ['pica', 'picas'],
    css: function (n) { return n + 'pc'; }
  },
  {
    unit: ['barleycorn', 'barleycorns'],
    css: function (n) { return n * 6 * 4 + 'pt'; }
  },
  {
    unit: ['digit', 'digits'],
    css: function (n) { return n / 4 * 3 * 12 * 6 + 'pt'; }
  },
  {
    unit: ['finger', 'fingers'],
    css: function (n) { return n * 7 / 8 * 12 * 6 + 'pt'; }
  },
  {
    unit: ['inch', 'inches'],
    css: function (n) { return n + 'in'; }
  },
  {
    unit: ['stick', 'sticks'],
    css: function (n) { return n * 2 + 'in'; }
  },
  {
    unit: ['nail', 'nails'],
    css: function (n) { return n * 3 / 4 * 3 * 12 * 6 + 'pt'; }
  },
  {
    unit: ['palm', 'palms'],
    css: function (n) { return n * 3 + 'in'; }
  },
  {
    unit: ['hand', 'hands'],
    css: function (n) { return n * 2 * 2 + 'in'; }
  },
  {
    unit: ['shaftment', 'shaftments'],
    css: function (n) { return n * 2 * 3 + 'in'; }
  },
  {
    unit: ['link', 'links'],
    css: function (n) { return n / 25 * 11 * 3 * 2 * 3 + 'in'; }
  },
  {
    unit: ['span', 'spans'],
    css: function (n) { return n * 3 * 3 + 'in'; }
  },
  {
    unit: ['foot', 'feet', 'ft'],
    css: function (n) { return n * 12 + 'in'; }
  },
  {
    unit: ['cubit', 'cubits'],
    css: function (n) { return n * 3 * 2 * 3 + 'in'; }
  },
  {
    unit: ['pace', 'paces'],
    css: function (n) { return n * 5 * 2 * 3 + 'in'; }
  },
  {
    unit: ['yard', 'yards', 'yd'],
    css: function (n) { return n * 3 * 12 + 'in'; }
  },
  {
    unit: ['ell', 'ells'],
    css: function (n) { return n * 5 * 3 * 3 + 'in'; }
  },
  {
    unit: ['grade', 'grades', 'step', 'steps'],
    css: function (n) { return n * 2 * 5 * 2 * 3 + 'in'; }
  },
  {
    unit: ['fathom', 'fathoms', 'ftm'],
    css: function (n) { return n * 2 * 3 * 12 + 'in'; }
  },
  {
    unit: ['rod', 'rods', 'pole', 'poles', 'perch', 'perches'],
    css: function (n) { return n * 11 * 3 * 2 * 3 + 'in'; }
  },
  {
    unit: ['rope', 'ropes'],
    css: function (n) { return n * 4 * 2 * 5 * 2 * 3 + 'in'; }
  },
  {
    unit: ['chain', 'chains'/*, 'ch'*/],
    css: function (n) { return n * 4 * 11 * 3 * 2 * 3 + 'in'; }
  },
  {
    unit: ['ramsdenschain', 'ramsdenschains'],
    css: function (n) { return n * 5 * 4 * 2 * 5 * 2 * 3 + 'in'; }
  },
  {
    unit: ['shackle', 'shackles'],
    css: function (n) { return n * 15 * 2 * 3 * 12 + 'in'; }
  },
  {
    unit: ['skein', 'skeins'],
    css: function (n) { return n * 96 * 5 * 3 * 3 + 'in'; }
  },
  {
    unit: ['cable', 'cables'],
    css: function (n) { return n * 100 * 2 * 3 * 12 + 'in'; }
  },
  {
    unit: ['furlong', 'furlongs', 'fur'],
    css: function (n) { return n * 10 * 4 * 11 * 3 * 2 * 3 + 'in'; }
  },
  {
    unit: ['romanmile', 'romanmiles'],
    css: function (n) { return n * 50 * 5 * 4 * 2 * 5 * 2 * 3 + 'in'; }
  },
  {
    unit: ['mile', 'miles', 'mi'],
    css: function (n) { return n * 1760 * 3 * 12 + 'in'; }
  },
  {
    unit: ['nauticmile', 'nauticmiles', 'nauticalmile', 'nauticalmiles'],
    css: function (n) { return n * 10 * 100 * 2 * 3 * 12 + 'in'; }
  },
  {
    unit: ['league', 'leagues', 'lea'],
    css: function (n) { return n * 3 * 10 * 100 * 2 * 3 * 12 + 'in'; }
  },
  {
    unit: ['spindle', 'spindles'],
    css: function (n) { return n * 120 * 96 * 5 * 3 * 3 + 'in'; }
  }
];
