const sum = (a, b) => a + b;

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar };



const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the dollar value
    return valueInYen;
}

module.exports = { sum, fromDollarToYen };



const fromEYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.87;
    // return the dollar value
    return valueInPound;
}


module.exports = { sum, fromEuroToDollar };