const markdown = require('marked')
const fetchedSheets = require('./_fetchSheets.js')

markdown.setOptions({
  breaks: true,
  smartypants: true
})

module.exports = fetchedSheets.then(data => data['Abilities'].map(row => ({
      name: row.ability,
      bonusStats: row.bonusStats,
      description: markdown(row.description)
    })
  )
)
