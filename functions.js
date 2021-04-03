function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function convertMoney() {
    document.getElementById("convertMoney").style.display = "block";
    document.getElementById("convertData").style.display = "none";
    document.getElementById("convertTemperature").style.display = "none";
}

function convertData() {
    document.getElementById("convertMoney").style.display = "none";
    document.getElementById("convertData").style.display = "block";
    document.getElementById("convertTemperature").style.display = "none";
}

function convertTemperature() {
    document.getElementById("convertMoney").style.display = "none";
    document.getElementById("convertData").style.display = "none";
    document.getElementById("convertTemperature").style.display = "block";
}