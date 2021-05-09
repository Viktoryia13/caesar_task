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

module.exports = validation;