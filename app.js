const sum = (a, b) => a + b;


const oneEuroIs = {
    JPY: 156.5,  
    USD: 1.07,   
    GBP: 0.87   
};


const fromEuroToDollar = (euro) => euro * oneEuroIs.USD;
const fromDollarToYen = (dollar) => (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
const fromYenToPound = (yen) => (yen / oneEuroIs.JPY) * oneEuroIs.GBP;


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
