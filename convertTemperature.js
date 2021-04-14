var celciusVar, fahrenheitVar, kelvinVar;

function celsiusToFahrenheit() {
    celciusVar = parseFloat(prompt("Enter the value in degrees celsius"));
    fahrenheitVar = celciusVar * (9/5) + 32;
    fahrenheitVar = fahrenheitVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + celciusVar + " °C equals approximately " + fahrenheitVar + " °F</h2>";
}

function FahrenheitToCelcius() {
    fahrenheitVar = parseFloat(prompt("Enter the value in degrees fahrenheit"));
    celciusVar = (fahrenheitVar - 32) * (5/9);
    celciusVar = celciusVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + fahrenheitVar + " °F equals approximately " + celciusVar + " °C</h2>";
}

function celsiusToKelvin() {
    celciusVar = parseFloat(prompt("Enter the value in degrees celsius"));
    kelvinVar = celciusVar + 273.15;
    kelvinVar = kelvinVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + celciusVar + " °C equals approximately " + kelvinVar + " K</h2>";
}

function kelvinToCelcius() {
    kelvinVar = parseFloat(prompt("Enter the value in kelvin"));
    celciusVar = kelvinVar - 273.15;
    celciusVar = celciusVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + kelvinVar + " K equals approximately " + celciusVar + " °C</h2>";
}

function FahrenheitToKelvin() {
    fahrenheitVar = parseFloat(prompt("Enter the value in degrees fahrenheit"));
    kelvinVar = (fahrenheitVar - 32) * (5/9) + 273.15;
    kelvinVar = kelvinVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + fahrenheitVar + " °F equals approximately " + kelvinVar + " K</h2>";
}

function kelvinToFahrenheit() {
    kelvinVar = parseFloat(prompt("Enter the value in kelvin"));
    fahrenheitVar = (kelvinVar - 273.15) * (9/5) + 32;
    fahrenheitVar = fahrenheitVar.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + kelvinVar + " K equals approximately " + fahrenheitVar + " °F</h2>";
}