var markdown = require('marked')
markdown.setOptions({
  breaks: true,
  smartypants: true,
})

module.exports = row => ({
  name: row.ability,
  bonusStats: row.bonusstats,
  description: markdown(row.description)
})
