const item = row => ({
  name: row.name,
  buy: row.buy,
  buyIsNumeric: Boolean(parseInt(row.buy)),
  sell: row.sell,
  sellIsNumeric: Boolean(parseInt(row.sell)),
  description: row.description
});

module.exports = item;
