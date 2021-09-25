const fetchedSheets = require('./_fetchSheets.js')

module.exports = fetchedSheets.then(data => data['Items'].map(
  row => ({
      ...row,
      buyIsNumeric: isFinite(+row.buy),
      sellIsNumeric: isFinite(+row.sell)
    })
  )
)
