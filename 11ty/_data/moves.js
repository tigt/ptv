const markdown = require('marked')
const fetchedSheets = require('./_fetchSheets.js')

markdown.setOptions({
  breaks: true,
  smartypants: true,
})

module.exports = fetchedSheets.then(data => data['Moves'].map(row => ({
    ...row,
    name: row.move,
    description: markdown(row.description || '')
  })
))
