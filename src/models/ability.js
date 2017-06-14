var markdown = require('marked');

markdown.setOptions({
  breaks: true,
  smartypants: true,
});

function Ability(row) {
  this.name = row.ability;

  this.bonusStats = row.bonusstats;

  this.description = markdown(row.description);
}

module.exports = Ability;
