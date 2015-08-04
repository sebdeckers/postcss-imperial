module.exports = [
  {
    unit: ['fathom', 'fathoms', 'ftm'],
    css: function (amount) { return amount * 2 * 3 * 12 + 'in'; }
  },
  {
    unit: ['twip', 'twips'],
    css: function (amount) { return amount / 20 + 'pt'; }
  }
];
