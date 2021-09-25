function moveset (row) {
  if (!row) { return }

  const levelUpMoves = nameStartsWith(row, 'level').map(([level, move]) => ({
    level: level.replace('level', ''),
    move: move.split(/\s*,/g)
  }));
  if (! levelUpMoves.some(x => x.level == 3) && levelUpMoves.some(x => x.level > 3)) {
    levelUpMoves.unshift({ level: 3 })
  }
  if (! levelUpMoves.some(x => x.level == 2) && levelUpMoves.some(x => x.level > 2)) {
    levelUpMoves.unshift({ level: 2 })
  }

  return {
    evolution: row.evomoves,
    starting: nameStartsWith(row, 'start').map(x => x[1]),
    levelUp: levelUpMoves,
    tms: nameStartsWith(row, 'tm').map(x => x[1]),
    tutor: nameStartsWith(row, 'tutor').map(x => x[1])
      .concat((row.naturaltutors || '').split(/\s*?,/g))
      .filter(Boolean)
      .sort(),
    egg: nameStartsWith(row, 'egg').map(x => x[1]),
  };
}

function nameStartsWith(row, str) {
  return Object.entries(row)
    .filter(([ name, val ]) => val && name.startsWith(str));
}

module.exports = moveset;
