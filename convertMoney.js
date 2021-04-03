var dolarValue, realValue, euroValue, bolivarValue;

function convertDolarToReal() {
    dolarValue = parseFloat(prompt("Digite o valor em dólar"));
    realValue = dolarValue * 5.71;
    realValue = realValue.toFixed(2); // Fixar 2 casas decimais
    document.getElementById("answer").innerHTML = "<h2>$ " + dolarValue + " equivale aproximadamente a R$ " + realValue + "</h2>";
}

function convertRealToDolar() {
    realValue = parseFloat(prompt("Digite o valor em reais"));
    dolarValue = realValue / 5.71;
    dolarValue = dolarValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>R$ " + realValue + " equivale a aproximadamente $ " + dolarValue + "</h2>";
}

function convertEuroToReal() {
    euroValue = parseFloat(prompt("Digite o valor em euro"));
    realValue = euroValue * 6.71;
    realValue = realValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>E$ " + euroValue + " equivale a aproximadamente R$ " + realValue + "</h2>";
}

function convertRealToEuro() {
    realValue = parseFloat(prompt("Digite o valor em reais"));
    euroValue = realValue / 6.71;
    euroValue = euroValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>R$ " + realValue + " equivale a aproximadamente E$ " + euroValue + "</h2>";
}

function convertBolivarToReal() {
    bolivarValue = parseFloat(prompt("Digite o valor em bolívares"));
    realValue = bolivarValue * 0.0000029;
    realValue = realValue.toFixed(7);
    document.getElementById("answer").innerHTML = "<h2>B$ " + bolivarValue + " equivale a aproximadamente R$ " + realValue + "</h2>";
}

function convertRealToBolivar() {
    realValue = parseFloat(prompt("Digite o valor em reais"));
    bolivarValue = realValue / 0.0000029;
    bolivarValue = bolivarValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>R$ " + realValue + " equivale a aproximadamente B$ " + bolivarValue + "</h2>";
}

