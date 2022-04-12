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
    const sheetName = sheet.range.split('!')[0]
    let columnNames = sheet.values.shift()

    const rows = sheet.values.map(row =>
      Object.fromEntries(
        row.map((cell, i) => [columnNames[i], cell])
          .filter(([_, val]) => /[^-\u2014\s]/.test(val) // Remove empty, whitespace-only, and dash-only cells
      ) 
    ))

    return [sheetName, rows]
  })))
  .catch(console.error)

fetchedSheets.then(data => {
  writeJson('items', data['Items'].map(row => ({
    name: row.Name,
    buy: row.Buy,
    sell: row.Sell,
    description: row.Description,
    buyIsNumeric: isFinite(+row.Buy),
    sellIsNumeric: isFinite(+row.Sell)
  })))

  writeJson('moves', data['Moves'].map(row => ({
    type: row.Type,
    kind: row.Kind,
    power: row.Power,
    pp: row.PP,
    accuracy: row.Accuracy,
    range: row.Range,
    description: row.Description && markdown(row.Description),
    zEffect: row['Z-Effect'],
    maxPower: row['MAX Power'],
    name: row.Move
  })))

  writeJson('abilities', data['Abilities'].map(row => ({
    name: row.Name,
    bonusStats: row['Bonus Stats'],
    description: row.Description && markdown(row.Description)
  })))

  const movesets = Object.fromEntries(data['Movesets'].map(movesetsMapper))
  const tutorMoves = Object.fromEntries(data["'Tutor Matrix'"].map(tutorMatrixMapper))
  const dexBlurbs = Object.fromEntries(data['Dex'].map(row => [row.Name, row.Blurb]))
  const dexData = Object.fromEntries(data['Pokemon'].map(data => dexMapper(data, tutorMoves, movesets, dexBlurbs)))
  
  const families = {}
  for (const name in dexData) {
    const mon = dexData[name]
    const baseForm = getBaseForm(name, dexData)
    const baseName = baseForm?.name.replace(/^Galarian |^Alolan |^Hisuian |^Mega | \([^)]*?\)$/g, '').toLowerCase()
    families[baseName]?.push(mon) || (families[baseName] = [mon])
  }
  writeJson('pokemon', families)

  function getBaseForm (name, dex) {
    if (name === '...?') { return dex['Luvdisc'] }
    
    const mon = dex[name]
    const prevo = mon.evolves.from
    if (prevo) {
      if (prevo === name) {
        throw Error(`${name} listed as evolving from from itself, exiting to avoid infinite recursion`)
      }
      return getBaseForm(prevo, dex)
    }
    return mon
  }

  function dexMapper (row, tutorMoves, movesets, dexBlurbs) {
    const blurb = dexBlurbs[row.Name]
    const naturalMoves = movesets[row.Name]
    const { form, starting, levelUp } = naturalMoves || {}
  
    return [row.Name, {
        name: row.Name,
        type1: row['Type 1'],
        type2: row['Type 2'],
        stats: {
          HP: +row['New HP'],
          ATK: +row.ATK,
          DEF: +row.DEF,
          SATK: +row.SATK,
          SDEF: +row.SDEF,
          SPE: +row.SPE
        },
        skills: {
          Athletics: row.ATK - 5,
          Endurance: row.DEF - 5,
          Focus: row.SATK - 5,
          Stealth: row.SDEF - 5,
          Acrobatics: row.SPE - 5
        },
        height: row.Height.replace(/'/g, '′').replace(/"/g, '″'),
        weight: row.Weight,
        eggGroups: [row['Egg 1'], row['Egg 2']].filter(Boolean),
        abilities: {
          start: parseAbilities(row['Ability 1'], row['Ability 2']),
          level5: parseAbilities(row['Ability 3'], row['Ability 4'], row['Ability 5'])
        },
        catchDC: +row['◓ DC'],
        evolves: {
          by: row['Evolves By'],
          from: row['Evolves From']
        },
        moves: {
          form,
          starting,
          levelUp,
          tutor: tutorMoves[row.Name]?.filter(move => !naturalMoves.all.includes(move))
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
  const levelUpEntries = Object.entries(row).filter(([name]) => name.startsWith('Level'))
      .map(([name, val]) => [parseInt(name.replace('Level', '')), val.split(', ')])
  
  // Preserve in-between levels that don’t learn moves
  const lastLevel = levelUpEntries.slice(-1)?.[0]?.[0] // Ditto, for example, has no level-up moves

  let levelUpArray = Array(20).fill(false)
  for (const [level, moves] of levelUpEntries) {
    levelUpArray[level] = moves
  }

  const levelUp = Object.fromEntries(
    levelUpArray
      .slice(2, lastLevel + 1)
      .map((moves, i) => [i + 2, moves])
  )

  const form = row.Form?.split(', ')
  const starting = [row.Start1, row.Start2, row.Start3, row.Start4].filter(Boolean)

  return [row.Mon, {
    form,
    starting,
    levelUp,
    all: [].concat(form, starting, levelUpEntries.flatMap(([_, val]) => val))
  }]
}

function tutorMatrixMapper (row) {
  const tutorSet = []
  for (const key in row) {
    if (row[key] === 'x') {
      tutorSet.push(key)
    }
  }
  return [row.Mon, tutorSet]
}
