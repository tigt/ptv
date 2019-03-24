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
      Athletics: 5 - row.atk,
      Endurance: 5 - row.def,
      Focus: 5 - row.satk,
      Stealth: 5 - row.sdef,
      Acrobatics: 5 - row.spd
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
