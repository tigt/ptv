const fetchedSheets = require('./_fetchSheets.js')

module.exports = async function () {
  return fetchedSheets.then(data => {
    const movesets = Object.fromEntries(data['Movesets'].map(movesetsMapper))
    console.log(data["'Tutor Matrix'"])
    const tutorMoves = Object.fromEntries(data["'Tutor Matrix'"].map(tutorMatrixMapper))
    const dexData = Object.fromEntries(data['Pokemon'].map(data => dexMapper(data, tutorMoves, movesets)))

    const families = {}
    for (const name in dexData) {
      const mon = dexData[name]
      const baseForm = getBaseForm(name, dexData)
      const baseName = baseForm.name.replace(/^Galarian |^Alolan | \(.*?\)$/, '')
      families[baseName]?.push(mon) || (families[baseName] = [mon])
    }
    return families
  })
}

function getBaseForm (name, dex) {
  if (name === '...?') { return dex['Luvdisc'] }

  let mon = dex[name]
  if (mon.evolves.from) {
    return getBaseForm(mon.evolves.from, dex)
  }
  return mon
}

function dexMapper (row, tutorMoves, movesets) {
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
        start: [row.ability1, row.ability2].filter(Boolean),
        level5: [row.ability3, row.ability4, row.ability5].filter(Boolean)
      },
      catchDC: +row.dc,
      evolves: {
        by: row.evolvesBy,
        from: row.evolvesFrom
      },
      moves: {
        ...movesets[row.name],
        tutor: tutorMoves[row.name]
      }
    }]
}

function movesetsMapper (row) {
  return [row.mon, {
    form: row.form?.split(', '),
    starting: [row.start1, row.start2, row.start3, row.start4].filter(Boolean),
    levelUp: Object.fromEntries(
      Object.entries(row)
        .filter(([name, val]) => val && name.startsWith('level'))
        .map(([_, val], i) => [i+2, val.split(', ')])
    )
  }]
}
// may have to use `i` to correctly map back column indices to formatted move names
function tutorMatrixMapper (row, i) {
  const tutorSet = [row.mon, []]
  for (const key in row) {
    if (row[key] === 'x') {
      tutorSet[1].push(key)
    }
  }
  return tutorSet
}
