module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberArray = [];
    if (number === 0 ) return 'zero';
    if (number < 20 ) return units[number];
    if (number < 100 ) {
        return tens[Math.floor(number/10)] +
            (number % 10 !== 0 ? " " : "") +
            units[Math.floor(number % 10)]
    }
    let numToString = number.toString();
    if (numToString[1] === '0' && numToString[2] === '0'){
        return units[numToString[0]] + ' hundred';
    }else{
        return  units[numToString[0]] +
            " hundred " +
            toReadable(parseInt(numToString[1] + numToString[2]));
    }



}
