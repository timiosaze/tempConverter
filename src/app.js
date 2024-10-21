function toFahrenheit(){
    const value = document.getElementById('number').value;
    console.log(value);
    let result = fromCelciusToFahrenheit(value);
    let resultDiv = document.getElementById('Result');
    resultDiv.innerHTML = '<p class="text-2xl font-bold">Result:' + result + '<sup>o</sup>F</p>';
}

function toCelcius(){
    const value = document.getElementById('number').value;
    console.log(value);
    let result = fromFahrenheitToCelcius(value);
    let resultDiv = document.getElementById('Result');
    resultDiv.innerHTML = '<p class="text-2xl font-bold">Result:' + result + '<sup>o</sup>C</p>';
}