const fetch = require('node-fetch')

const params = new URLSearchParams({
  key: 'AIzaSyCCoYZZOojuEzooDthd73fsZhRqFnEVrQs',
  majorDimension: 'ROWS',
  valueRenderOption: 'UNFORMATTED_VALUE',
  prettyPrint: false
})
for (const name of ['Pokemon', 'Abilities', 'Moves', 'Movesets', 'Items', 'Tutor Matrix', 'Dex']) {
  params.append('ranges', name)
}

module.exports = fetch(`https://sheets.googleapis.com/v4/spreadsheets/18Q390sVb7ZWFQFFWoj8-3UX5szDsT7f3-aOmVfo3trA/values:batchGet?${params}`)
  .then(res => res.json())
  .then(json => {
    const ret = {}

    for (const sheet of json.valueRanges) {
      let columnNames = sheet.values.splice(0, 1)[0]
      
      if (!sheet.range.startsWith('Tutor')) {
        columnNames = columnNames.map(toCamelCase)
      }

      ret[sheet.range.split('!')[0]] = sheet.values.map(row =>
        Object.fromEntries(
          row.map((cell, i) => [columnNames[i], cell])
            .filter(([_, val]) => /[^-\u2014\s]/.test(val)
        ) 
      ))
    }

    return ret
  })
  .catch(console.error)

function toCamelCase (str) {
  return str.split(' ').map((word, i) => {
    return i === 0
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join('')
}
