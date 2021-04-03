var celciusVar, fahrenheitVar, kelvinVar;

function celsiusToFahrenheit() {
    celciusVar = parseFloat(prompt("Digite o valor em graus celcius"));
    fahrenheitVar = celciusVar * (9/5) + 32;
    fahrenheitVar = fahrenheitVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + celciusVar + " °C equivale a aproximadamente " + fahrenheitVar + " °F</h2>";
}

function FahrenheitToCelcius() {
    fahrenheitVar = parseFloat(prompt("Digite o valor em graus fahrenheit"));
    celciusVar = (fahrenheitVar - 32) * (5/9);
    celciusVar = celciusVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + fahrenheitVar + " °F equivale a aproximadamente " + celciusVar + " °C</h2>";
}

function celsiusToKelvin() {
    celciusVar = parseFloat(prompt("Digite o valor em graus celcius"));
    kelvinVar = celciusVar + 273.15;
    kelvinVar = kelvinVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + celciusVar + " °C equivale a aproximadamente " + kelvinVar + " K</h2>";
}

function kelvinToCelcius() {
    kelvinVar = parseFloat(prompt("Digite o valor em kelvin"));
    celciusVar = kelvinVar - 273.15;
    celciusVar = celciusVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + kelvinVar + " K equivale a aproximadamente " + celciusVar + " °C</h2>";
}

function FahrenheitToKelvin() {
    fahrenheitVar = parseFloat(prompt("Digite o valor em graus fahrenheit"));
    kelvinVar = (fahrenheitVar - 32) * (5/9) + 273.15;
    kelvinVar = kelvinVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + fahrenheitVar + " °F equivale a aproximadamente " + kelvinVar + " K</h2>";
}

function kelvinToFahrenheit() {
    kelvinVar = parseFloat(prompt("Digite o valor em kelvin"));
    fahrenheitVar = (kelvinVar - 273.15) * (9/5) + 32;
    fahrenheitVar = fahrenheitVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + kelvinVar + " K equivale a aproximadamente " + fahrenheitVar + " °F</h2>";
}