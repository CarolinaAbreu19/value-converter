var dolarValue, realValue, euroValue, bolivarValue;

function convertDolarToReal() {
    dolarValue = parseFloat(prompt("Enter the dollar amount"));
    realValue = dolarValue * 5.71;
    realValue = realValue.toFixed(2); // Fixar 2 casas decimais
    document.getElementById("answer").innerHTML = "<h2>$ " + dolarValue + " roughly equals R$ " + realValue + "</h2>";
}

function convertRealToDolar() {
    realValue = parseFloat(prompt("Enter the amount in reais"));
    dolarValue = realValue / 5.71;
    dolarValue = dolarValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>R$ " + realValue + " roughly equals $ " + dolarValue + "</h2>";
}

function convertEuroToReal() {
    euroValue = parseFloat(prompt("Enter the amount in euro"));
    realValue = euroValue * 6.71;
    realValue = realValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>E$ " + euroValue + " roughly equals R$ " + realValue + "</h2>";
}

function convertRealToEuro() {
    realValue = parseFloat(prompt("Enter the amount in reais"));
    euroValue = realValue / 6.71;
    euroValue = euroValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>R$ " + realValue + " roughly equals E$ " + euroValue + "</h2>";
}

function convertBolivarToReal() {
    bolivarValue = parseFloat(prompt("Enter the amount in bolivars"));
    realValue = bolivarValue * 0.0000029;
    realValue = realValue.toFixed(7);
    document.getElementById("answer").innerHTML = "<h2>B$ " + bolivarValue + " roughly equals R$ " + realValue + "</h2>";
}

function convertRealToBolivar() {
    realValue = parseFloat(prompt("Enter the amount in reais"));
    bolivarValue = realValue / 0.0000029;
    bolivarValue = bolivarValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>R$ " + realValue + " roughly equals B$ " + bolivarValue + "</h2>";
}

