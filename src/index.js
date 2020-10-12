module.exports = function toReadable(number) {
    const VALUES = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        00: 'hundred'
    }

    let arr = [];
    arr = number.toString().split('');

    if (number === 0) {
        return 'zero';
    }

    if (VALUES.hasOwnProperty(number)) {
        return VALUES[number];
    } else if (arr.length === 2) {
        arr[0] = arr[0].concat('0');
        return VALUES[arr[0]] + ' ' + VALUES[arr[1]];
    } else if (arr.length === 3 && (number % 100 === 0)) {
        return VALUES[arr[0]] + ' ' + VALUES[00];
    } else if (arr.length === 3 && VALUES.hasOwnProperty(number % 100)) {
        arr[1] = arr[1].concat('0');
        return VALUES[arr[0]] + ' ' + VALUES[00] + ' ' + VALUES[number % 100];
    } else {
        arr[1] = arr[1].concat('0');
        return VALUES[arr[0]] + ' ' + VALUES[00] + ' ' + VALUES[arr[1]] + ' ' + VALUES[arr[2]];
    }
}
