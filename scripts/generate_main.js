const Handlebars = require('handlebars');
const fs = require('fs');

const parameters = process.argv.slice(2);
const inputFolderFilePath = parameters[0];
const outputFilePath = parameters[1];

console.debug('Reading ' + inputFolderFilePath + ' folder to generate into ' + outputFilePath);

const files = fs.readdirSync(inputFolderFilePath);
let model = {};
model.files = files.map(file => file.replace('.scss', ''));
const template = Handlebars.compile('{{#each files}}@import \'scss/{{this}}\';\n{{/each}}');
const result = template(model);

fs.writeFile(outputFilePath, result, err => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});

