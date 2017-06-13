var fs = require('fs');
var Tabletop = require('tabletop');
var handlebars = require('handlebars');

var tabletop = Tabletop.init({
  key: '18Q390sVb7ZWFQFFWoj8-3UX5szDsT7f3-aOmVfo3trA',
  callback: writeDex,
  postProcess: massageData,
  wanted: ['Pokemon'],
  prettyColumnNames: false,
  simpleSheet: true,
});

var mons = [];

function Mon(row) {
  if (row.id.match(/\.1$/)) {
    this.hasForms = true;
  } else if (row.id.includes('.')) {
    this.isForm = true;
  }

  this.id = row.id;
  this.name = row.name;
  this.slug = row.name.toLowerCase().replace(/ |:/g, '-');
  this.dexNumber = row.id.split('.')[0];

  this.stats = {
    HP: row.hp,
    ATK: row.atk,
    DEF: row.def,
    SATK: row.satk,
    SDEF: row.sdef,
    SPD: row.spd
  };

  this.height = row.height.replace("'", '′').replace('"', '″');
  this.weight = row.weight;

  this.eggGroups = (function(row) {
    var eggGroups = row.egg1 ? [row.egg1] : ['None'];

    if (row.egg2) eggGroups.push(row.egg2);

    return eggGroups.join(', ');
  })(row);

  this.startingAbilities = [row.ability1, row.ability2];
  this.level10Abilities = [row.ability3, row.ability4, row.ability5];
}

function massageData(row) {
  deleteHyphens(row);

  var mon = new Mon(row);
  mons.push(mon);
  // console.dir(mon, {colors: true});
}

function deleteHyphens(row) {
  Object.keys(row).forEach(function(key) {
    if (row[key] === '-') {
      delete row[key];
    }
  });
}

function writeDex(data, tabletop) {
  // console.dir(data, {depth: null, colors: true});

  var template = handlebars.compile(fs.readFileSync('src/templates/mon.hbs').toString());
  var result = template({mons: mons});
  fs.writeFileSync('dex/index.html', result);
}
