var mbValue, gbValue, byteValue, bitValue;

function convertMBtoGB() {
    mbValue = parseFloat(prompt("Enter the value in megabytes"));
    gbValue = mbValue / 1024;
    gbValue = gbValue.toFixed(2); // Fixar 2 casas decimais
    document.getElementById("answer").innerHTML = "<h2>" + mbValue + " megabytes equals approximately " + gbValue + " gigabytes</h2>";
}

function convertGBtoMB() {
    gbValue = parseFloat(prompt("Enter the value in gigabytes"));
    mbValue = gbValue * 1024;
    mbValue = mbValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + gbValue + " gigabytes equals approximately " + mbValue + " megabytes</h2>";
}

function convertMBtoB() {
    mbValue = parseFloat(prompt("Enter the value in megabytes"));
    byteValue = mbValue * 1024;
    byteValue = byteValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + mbValue + " megabytes equals approximately " + byteValue + " bytes</h2>";
}

function convertBtoMB() {
    byteValue = parseFloat(prompt("Enter the value in bytes"));
    mbValue = byteValue / 1024;
    mbValue = mbValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + byteValue + " bytes equals approximately " + mbValue + " megabytes</h2>";
}

function convertBtoBits() {
    byteValue = parseFloat(prompt("Enter the value in bytes"));
    bitValue = byteValue * 8;
    bitValue = bitValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + byteValue + " bytes equals approximately " + bitValue + " bits</h2>";
}

function convertBitstoB() {
    bitValue = parseFloat(prompt("Enter the value in bits"));
    byteValue = bitValue / 8;
    byteValue = byteValue.toFixed(2);
    document.getElementById("answer").innerHTML = "<h2>" + bitValue + " bits equals approximately " + byteValue + " bytes</h2>";
}

