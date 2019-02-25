const fs = require('fs');
const Tabletop = require('tabletop');
const { handlebars, templates } = require('./handlebars-setup');

Tabletop.init({
  key: '18Q390sVb7ZWFQFFWoj8-3UX5szDsT7f3-aOmVfo3trA',
  wanted: ['Pokemon', 'Abilities', 'Moves', 'Movesets'],
  prettyColumnNames: false,
  postProcess: function deleteHyphens (row) {
    Object.entries(row).forEach(([key, val]) =>
      /^[-\u2014]$/.test(val) && delete row[key]
    );
  },
  callback: generateSite
});

function generateSite (_, tabletop) {
  // Object.values(tabletop.sheets('Abilities')).forEach(writePage);
  // Object.values(tabletop.sheets('Moves')).forEach(writePage);
  const movesetData = tabletop.sheets('Movesets').elements
    .reduce((sets, row) => {
      sets[row.pokemon] = row;
      return sets;
    }, {});

  const pokemonModel = require('./models/pokemon');
  const pokemonData = tabletop.sheets('Pokemon').elements
    .map(row => pokemonModel(row, movesetData));

  writePage(tabletop.sheets('Pokemon'), {
    slug: 'dex',
    data: { pokemon: pokemonData }
  });
}

function writePage({ name, elements }, { data, slug = name }) {
  name = name.toLowerCase();
  const model = require('./models/' + name);
  const template = templates[name];
  const page = template(data || { [name]: elements.map(model) });
  fs.writeFileSync(slug + '/index.html', page);
}
