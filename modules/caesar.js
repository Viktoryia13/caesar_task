const alphabetLength = 26;
const charCodeA = 97;
const charCodeZ = 122;
const charCodeCapitalA = 65;
const charCodeCapitalZ = 90;

function encode(text, shift) {
    let text_array = text.split('');

    let new_text_result = text_array.map(function (letter) {
        if (
            (letter >= 'a' && letter <= 'z') ||
            (letter >= 'A' && letter <= 'Z')
        ) {
            return shiftLetter(letter, shift);
        }
        return letter;
    });

    return new_text_result.join('');
}

function decode(text, shift) {
    let text_array = text.split('');

    let new_text_result = text_array.map(function (letter) {
        if (
            (letter >= 'a' && letter <= 'z') ||
            (letter >= 'A' && letter <= 'Z')
        ) {
            return shiftLetter(letter, -shift);
        }
        return letter;
    });

    return new_text_result.join('');
}

function shiftLetter(letter, shift) {
    let code = letter.charCodeAt();

    if (shift < 0) {
        shift = 26 + shift;
    }

    if (Math.abs(shift) >= alphabetLength) {
        shift = shift - alphabetLength * Math.floor(shift / alphabetLength);
    }

    new_code = code + shift;
    if (
        new_code > charCodeCapitalZ &&
        code >= charCodeCapitalA &&
        code <= charCodeCapitalZ
    ) {
        return String.fromCharCode(
            charCodeCapitalA + (new_code - charCodeCapitalZ - 1)
        );
    }

    if (new_code > charCodeZ && code >= charCodeA && code <= charCodeZ) {
        return String.fromCharCode(charCodeA + (new_code - charCodeZ - 1));
    }

    return String.fromCharCode(new_code);
}

module.exports = {
    encode,
    decode,
};
