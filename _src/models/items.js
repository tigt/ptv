module.exports = row => ({
  ...row,
  buyIsNumeric: isFinite(+row.buy),
  sellIsNumeric: isFinite(+row.sell)
})
