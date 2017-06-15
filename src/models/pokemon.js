function Pokemon(row) {
  this.id = row.id;
  this.name = row.name;
  this.dexNumber = row.id.split('.')[0];

  this.stats = {
    HP: row.hp,
    ATK: row.atk,
    DEF: row.def,
    SATK: row.satk,
    SDEF: row.sdef,
    SPD: row.spd,
  };

  this.height = row.height.replace("'", '′').replace('"', '″');
  this.weight = row.weight;

  if (row.gender) this.genderRestriction = row.gender;

  this.eggGroups = row.egg2 ?
    row.egg1 + ', ' + row.egg2 :
    row.egg1;

  this.startingAbilities = [row.ability1, row.ability2];
  this.level10Abilities = [row.ability3, row.ability4, row.ability5];

  this.captureDC = row['◓dc'];

  if (row.evolvesby) this.evolvesBy = row.evolvesby;
  if (row.evolvesfrom) this.evolvesFrom = row.evolvesfrom;
}

module.exports = Pokemon;
