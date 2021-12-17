const fetch = require('node-fetch')
const marked = require('marked')
const fs = require('fs')

marked.setOptions({
  breaks: true,
  smartypants: true
})

function markdown (str) {
  return marked(str.replace(/^•/gm, '*'))
}

const FILEBASE = './11ty/_data'

function writeJson (name, data) {
  const filename =  `${FILEBASE}/${name}.json`
  fs.writeFile(filename, JSON.stringify(data, null, 2),
    err => {
      if (err) { throw err } else {
        console.info(name, 'data written to', filename)
      }
    }
  )
}

const params = new URLSearchParams({
  key: 'AIzaSyCCoYZZOojuEzooDthd73fsZhRqFnEVrQs',
  majorDimension: 'ROWS',
  valueRenderOption: 'UNFORMATTED_VALUE',
  prettyPrint: false
})
for (const name of ['Pokemon', 'Abilities', 'Moves', 'Movesets', 'Items', 'Tutor Matrix', 'Dex']) {
  params.append('ranges', name)
}

const fetchedSheets = fetch(`https://sheets.googleapis.com/v4/spreadsheets/18Q390sVb7ZWFQFFWoj8-3UX5szDsT7f3-aOmVfo3trA/values:batchGet?${params}`)
  .then(res => res.json())
  .then(json => Object.fromEntries(json.valueRanges.map(sheet => {
    const sheetName = sheet.range.split('!')[0] // TODO: maybe lowercase these keys…

    let columnNames = sheet.values.shift()
    if (sheetName !== 'Tutor') { // Dunno why this sheet’s columns are cased differently than the others, but they are and it’s annoying
      columnNames = columnNames.map(titleToCamelCase)
    }

    const rows = sheet.values.map(row =>
      Object.fromEntries(
        row.map((cell, i) => [columnNames[i], cell])
          .filter(([_, val]) => /[^-\u2014\s]/.test(val) // Remove empty, whitespace-only, and dash-only cells
      ) 
    ))

    return [sheetName, rows]
  })))
  .catch(console.error)

/* https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values
  Takes an array of arrays, arranged like a spreadsheet is visually:
  [
    [Name, Birth, Death],
    [Plungo, 1987, ],
    [Chicken, 1999, 2001]
  ]
  …and spits out an array of rows with named column/value pairs:
  [
    Plungo: { Birth: 1987 },
    Chicken: { Birth: 1999, Death: 2001 }
  ]
  In theory this should already work with `majorDimension: COLUMNS`, but I haven’t tried that yet.
 */
function tableToNamedObjects (sheet) {
  let columnNames = sheet.values.shift()

  const rows = sheet.values.map(row => 
    row.map((cell, i) => [columnNames[i], cell])
      .filter(([_, val]) => /[^-\u2014\s]/.test(val) // Ignore empty and marked-as-empty cells
  ))

  return Object.fromEntries(rows)
}

fetchedSheets.then(data => {
  writeJson('items', data['Items'].map(row => ({
    ...row,
    buyIsNumeric: isFinite(+row.buy),
    sellIsNumeric: isFinite(+row.sell)
  })))

  writeJson('moves', data['Moves'].map(row => ({
    ...row,
    name: row.move,
    description: row.description && markdown(row.description)
  })))

  writeJson('abilities', data['Abilities'].map(row => ({
    name: row.ability,
    bonusStats: row.bonusStats,
    description: row.description && markdown(row.description)
  })))

  const movesets = Object.fromEntries(data['Movesets'].map(movesetsMapper))
  const tutorMoves = Object.fromEntries(data["'Tutor Matrix'"].map(tutorMatrixMapper))
  const dexBlurbs = Object.fromEntries(data['Dex'].map(row => [row.name, row.blurb]))
  const dexData = Object.fromEntries(data['Pokemon'].map(data => dexMapper(data, tutorMoves, movesets, dexBlurbs)))
  
  const families = {}
  for (const name in dexData) {
    const mon = dexData[name]
    const baseForm = getBaseForm(name, dexData)
    const baseName = baseForm.name.replace(/^Galarian |^Alolan |^Hisuian |^Mega | \([^)]*?\)$/g, '').toLowerCase()
    families[baseName]?.push(mon) || (families[baseName] = [mon])
  }
  writeJson('pokemon', families)

  function getBaseForm (name, dex) {
    if (name === '...?') { return dex['Luvdisc'] }
  
    let mon = dex[name]
    if (mon.evolves.from) {
      if (mon.evolves.from === name) {
        throw Error(`${name} listed as evolving from from itself, exiting to avoid infinite recursion`)
      }
      return getBaseForm(mon.evolves.from, dex)
    }
    return mon
  }

  function dexMapper (row, tutorMoves, movesets, dexBlurbs) {
    const blurb = dexBlurbs[row.name]
  
    return [row.name, {
        ...row,
        stats: {
          HP: +row.newHp,
          ATK: +row.atk,
          DEF: +row.def,
          SATK: +row.satk,
          SDEF: +row.sdef,
          SPE: +row.spe
        },
        skills: {
          Athletics: row.atk - 5,
          Endurance: row.def - 5,
          Focus: row.satk - 5,
          Stealth: row.sdef - 5,
          Acrobatics: row.spe - 5
        },
        height: row.height.replace(/'/g, '′').replace(/"/g, '″'),
        eggGroups: [row.egg1, row.egg2].filter(Boolean),
        abilities: {
          start: parseAbilities(row.ability1, row.ability2),
          level5: parseAbilities(row.ability3, row.ability4, row.ability5)
        },
        catchDC: +row['◓Dc'],
        evolves: {
          by: row.evolvesBy,
          from: row.evolvesFrom
        },
        moves: {
          ...movesets[row.name],
          tutor: tutorMoves[row.name]
        },
        blurb: blurb && markdown(blurb)
      }]
  
    // some ability slots have multiple choices, usually based on gender or forme, so this returns an array of arrays
    function parseAbilities (...strs) {
      return strs.filter(Boolean)
        .map(str =>
          str.split(/\//g)
            .map(s => s.trim())
        )
    }
  }
})

function movesetsMapper (row) {
  return [row.mon, {
    form: row.form?.split(', '),
    starting: [row.start1, row.start2, row.start3, row.start4].filter(Boolean),
    levelUp: Object.fromEntries(
      Object.entries(row)
        .filter(([name]) => name.startsWith('level'))
        .map(([name, val]) => [name.replace('level', ''), val.split(', ')])
    )
  }]
}

// may have to use `i` to correctly map back column indices to formatted move names
function tutorMatrixMapper (row, i) {
  const tutorSet = [row.mon, []]
  for (const key in row) {
    if (row[key] === 'x') {
      tutorSet[1].push(camelToTitleCase(key))
    }
  }
  return tutorSet
}

function titleToCamelCase (str) {
  return str.split(' ').map((word, i) => {
    return i === 0
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join('')
}

function camelToTitleCase (str) {
  return str.charAt(0).toUpperCase()
    + str.slice(1).replace(/[A-Z]/g, char => ' ' + char.toUpperCase())
}
