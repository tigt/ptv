const moveset = require('./moveset');

function pokemon(row, movesetData) {
  return {
    name: row.name,
    stats: {
      HP: row.newhp,
      ATK: row.atk,
      DEF: row.def,
      SATK: row.satk,
      SDEF: row.sdef,
      SPE: row.spd
    },
    skills: {
      Athletics: row.atk - 5,
      Endurance: row.def - 5,
      Focus: row.satk - 5,
      Stealth: row.sdef - 5,
      Acrobatics: row.spd - 5
    },
    height: row.height.replace("'", '′').replace('"', '″'),
    weight: row.weight,
    eggGroups: row.egg1 + (row.egg2 ? `,  ${row.egg2}` : ''),
    startingAbilities: [row.ability1, row.ability2],
    level5Abilities: [row.ability3, row.ability4, row.ability5],
    type1: row.type1,
    type2: row.type2,
    captureDC: row['◓dc'],
    genderRestriction: row.gender,
    evolvesBy: row.evolvesby,
    evolvesFrom: row.evolvesfrom,
    moves: moveset(movesetData[row.name])
  }
}

module.exports = pokemon;
