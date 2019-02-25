const fs = require('fs');
const { basename } = require('path');
const handlebars = require('handlebars');

handlebars.registerHelper('slugify', input => {
  return input && input.normalize()
    .trim()
    .toLowerCase()
    .replace(/[():']/g, '')
    .replace(/ /g, '-')
    .replace(/é/g, 'e');
});

function getFile(path) {
  return fs.readFileSync(path, 'utf8');
}

const partials = fs.readdirSync('_src/templates/partials')
  .filter(file => file.endsWith('.hbs'))
  .reduce((partials, file) => {
    const name = basename(file, '.hbs');
    partials[name] = getFile(`_src/templates/partials/${file}`);
    return partials;
  }, {})
handlebars.registerPartial(partials);

const templates = fs.readdirSync('_src/templates')
  .filter(file => file.endsWith('.hbs'))
  .reduce((templates, file) => {
    const name = basename(file, '.hbs');
    templates[name] = handlebars.compile(getFile(`_src/templates/${file}`));
    return templates;
  }, {});

module.exports = {
  handlebars: handlebars,
  templates: templates
};
