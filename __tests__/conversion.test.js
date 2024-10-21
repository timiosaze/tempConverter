const {fromCelciusToFahrenheit, fromFahrenheitToCelcius} = require('../src/conversion');

test("conversion of 90C to Fahrenheit", () => {
    expect(fromCelciusToFahrenheit(90)).toBe(194);
});
  
test("conversion of 122F to Celcius", () => {
    expect(fromFahrenheitToCelcius(122)).toBe(50);
});