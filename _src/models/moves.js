var markdown = require('marked');
markdown.setOptions({
  breaks: true,
  smartypants: true,
});

const move = row => ({
  ...row,
  name: row.move,
  power: row.power || '—',
  accuracy: row.accuracy || '—',
  zEffect: row['z-effect'],
  description: markdown(row.description)
})

module.exports = move;
