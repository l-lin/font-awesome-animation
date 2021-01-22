const Handlebars = require('handlebars');
const fs = require('fs');
const pjson = require('../package.json');

const template = Handlebars.compile('/*!\n' +
  ' * {{ name }} - v{{ version }}\n' +
  ' * https://github.com/{{ author }}/{{ name }}\n' +
  ' * License: MIT\n' +
  ' */');

const result = template(pjson);

const outputFilePath = process.argv.slice(1)[1];

fs.writeFile(outputFilePath, result, err => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});

