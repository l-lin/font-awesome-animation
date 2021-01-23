const Handlebars = require('handlebars');
const fs = require('fs');
const pjson = require('../package.json');

const parameters = process.argv.slice(2);
const outputFilePath = parameters[0];

console.debug('');
const template = Handlebars.compile('/*! {{ name }} v{{ version }} | MIT License | https://github.com/{{ author }}/{{ name }} */');
const result = template(pjson);

fs.writeFile(outputFilePath, result, err => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});

