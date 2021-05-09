const fs = require('fs');
const { Command } = require('commander');
const Transformer = require('./modules/transformer.js');
const { pipeline } = require('stream');

const program = new Command();

program
    .storeOptionsAsProperties(false)
    .version('0.0.1')
    .option('-a --action <action>', 'encode or decode')
    .option('-s --shift <shift>', 'shift')
    .option('-i --input <file>', 'input file')
    .option('-o --output <file>', 'output file')
    .parse(process.argv);

const { action, shift, input, output } = program.opts();

validation(action, shift, input, output);

pipeline(
    input ? fs.createReadStream(input) : process.stdin,
    new Transformer(action, shift),
    output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,
    (err) => {
        if (err) {
            console.error('Pipeline error.', err);
            process.exit(1);
        }
    }
);

function validation(action, shift) {
    if (action === undefined) {
        console.error('action is required');
        process.exit(1);
    }

    if (action !== 'encode' && action !== 'decode') {
        console.error('Action (encode/decode) are required');
        process.exit(1);
    }

    if (shift === undefined) {
        console.error('Please, indicate shift');
        process.exit(1);
    }
}
