function fromCelciusToFahrenheit(value){
    const formula = (value * (9 / 5)) + 32;
    return formula;
}

function fromFahrenheitToCelcius(value){
    const formula = (value - 32) * (5 / 9);
    return formula;
}

module.exports = {fromCelciusToFahrenheit, fromFahrenheitToCelcius};