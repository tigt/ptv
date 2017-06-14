var fs = require('fs');
var Tabletop = require('tabletop');
var handlebars = require('handlebars');

handlebars.registerHelper('slugify', function(string) {
  return string.normalize().toLowerCase().replace(/[ :']/g, '-');
});

var tabletop = Tabletop.init({
  key: '18Q390sVb7ZWFQFFWoj8-3UX5szDsT7f3-aOmVfo3trA',
  callback: writePages,
  postProcess: deleteHyphens,
  wanted: ['Pokemon', 'Abilities'],
  prettyColumnNames: false,
  simpleSheet: true,
});

function deleteHyphens(row) {
  Object.keys(row).forEach(function(key) {
    if (row[key] === '-') delete row[key];
  });
}

function template(name) {
  return handlebars.compile(fs.readFileSync('src/templates/' + name + '.hbs').toString());
}

function partial(name) {
  return handlebars.registerPartial(name,
    fs.readFileSync('src/templates/partials/' + name + '.hbs').toString());
}

function writePages(data, tabletop) {
  partial('start');

  writeAbilityPage(tabletop.sheets('Abilities'));
  writeDexPage(tabletop.sheets('Pokemon'));
}

function writeAbilityPage(data) {
  var Ability = require('./models/ability.js');
  var abilitiesTemplate = template('abilities');

  var abilities = data.elements.map(row => new Ability(row));

  fs.writeFileSync('abilities/index.html', abilitiesTemplate({abilities: abilities}));
}

function writeDexPage(data) {
  var Pokemon = require('./models/pokemon.js');
  var monTemplate = template('mon');

  var mons = data.elements.map(row => new Pokemon(row));

  fs.writeFileSync('dex/index.html', monTemplate({mons: mons}));
}
