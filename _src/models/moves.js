var markdown = require('marked');
markdown.setOptions({
  breaks: true,
  smartypants: true,
});

const move = row => ({
  name: row.move,
  type: row.type,
  category: row.category,
  power: row.power || '—',
  accuracy: row.accuracy || '—',
  range: row.range,
  pp: row.pp,
  zEffect: row.zeffect,
  description: markdown(row.description)
})

module.exports = move;
