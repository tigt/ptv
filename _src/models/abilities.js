var markdown = require('marked');
markdown.setOptions({
  breaks: true,
  smartypants: true,
});

const ability = row => ({
  name: row.ability,
  bonusStats: row.bonusstats,
  description: markdown(row.description)
});

module.exports = ability;
