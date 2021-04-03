var mbValue, gbValue, byteValue, bitValue;

function convertMBtoGB() {
    mbValue = parseFloat(prompt("Digite o valor em megabytes"));
    gbValue = mbValue / 1024;
    gbValue = gbValue.toFixed(2); // Fixar 2 casas decimais
    document.getElementById("answer").innerHTML = "<h2>" + mbValue + " megabytes equivale aproximadamente a " + gbValue + " gigabytes</h2>";
}

function convertGBtoMB() {
    gbValue = parseFloat(prompt("Digite o valor em gigabytes"));
    mbValue = gbValue * 1024;
    mbValue = mbValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + gbValue + " gigabytes equivale a aproximadamente " + mbValue + " megabytes</h2>";
}

function convertMBtoB() {
    mbValue = parseFloat(prompt("Digite o valor em megabytes"));
    byteValue = mbValue * 1024;
    byteValue = byteValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + mbValue + " megabytes equivale a aproximadamente " + byteValue + " bytes</h2>";
}

function convertBtoMB() {
    byteValue = parseFloat(prompt("Digite o valor em bytes"));
    mbValue = byteValue / 1024;
    mbValue = mbValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + byteValue + " bytes equivale a aproximadamente " + mbValue + " megabytes</h2>";
}

function convertBtoBits() {
    byteValue = parseFloat(prompt("Digite o valor em bytes"));
    bitValue = byteValue * 8;
    bitValue = bitValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + byteValue + " bytes equivale a aproximadamente " + bitValue + " bits</h2>";
}

function convertBitstoB() {
    bitValue = parseFloat(prompt("Digite o valor em bits"));
    byteValue = bitValue / 8;
    byteValue = byteValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + bitValue + " bits equivale a aproximadamente " + byteValue + " bytes</h2>";
}

