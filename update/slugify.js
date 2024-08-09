module.exports = function (input) {
  return input?.normalize()
    .trim()
    .toLowerCase()
    .replace(/[():%]/g, '')
    .replace(/[ ']/g, '-')
    .replace(/é/g, 'e')
}
