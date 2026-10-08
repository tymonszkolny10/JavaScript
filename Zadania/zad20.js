function AB_kry() {
    var xa_kow = Number(prompt("Podaj xa:"));
    var ya_kow = Number(prompt("Podaj ya:"));

    var xb_kow = Number(prompt("Podaj xb:"));
    var yb_kow = Number(prompt("Podaj yb:"));

    var AB = Math.sqrt(
        Math.pow(xa_kow - xb_kow, 2) +
        Math.pow(ya_kow - yb_kow, 2)
    );

    return AB;
}

function BC_kry() {
    var xb_kow = Number(prompt("Podaj xb:"));
    var yb_kow = Number(prompt("Podaj yb:"));

    var xc_kow = Number(prompt("Podaj xc:"));
    var yc_kow = Number(prompt("Podaj yc:"));

    var BC = Math.sqrt(
        Math.pow(xb_kow - xc_kow, 2) +
        Math.pow(yb_kow - yc_kow, 2)
    );

    return BC;
}

function AC_kry() {
    var xa_kow = Number(prompt("Podaj xa:"));
    var ya_kow = Number(prompt("Podaj ya:"));

    var xc_kow = Number(prompt("Podaj xc:"));
    var yc_kow = Number(prompt("Podaj yc:"));

    var AC = Math.sqrt(
        Math.pow(xa_kow - xc_kow, 2) +
        Math.pow(ya_kow - yc_kow, 2)
    );

    return AC;
}

document.write("Długość AB = " + AB_kry() + "<br>");
document.write("Długość BC = " + BC_kry() + "<br>");
document.write("Długość AC = " + AC_kry() + "<br>");
//Ale uwaga: w ten sposób punkty są wpisywane osobno przy każdej funkcji, więc np. współrzędne A trzeba podać ponownie.

//Lepsza, nadal bardzo prosta wersja, to wczytać 6 wartości raz:

var xa_kow = Number(prompt("Podaj xa:"));
var ya_kow = Number(prompt("Podaj ya:"));

var xb_kow = Number(prompt("Podaj xb:"));
var yb_kow = Number(prompt("Podaj yb:"));

var xc_kow = Number(prompt("Podaj xc:"));
var yc_kow = Number(prompt("Podaj yc:"));


function AB_kry() {
    return Math.sqrt(
        Math.pow(xa_kow - xb_kow, 2) +
        Math.pow(ya_kow - yb_kow, 2)
    );
}

function BC_kry() {
    return Math.sqrt(
        Math.pow(xb_kow - xc_kow, 2) +
        Math.pow(yb_kow - yc_kow, 2)
    );
}

function AC_kry() {
    return Math.sqrt(
        Math.pow(xa_kow - xc_kow, 2) +
        Math.pow(ya_kow - yc_kow, 2)
    );
}


document.write("AB = " + AB_kry() + "<br>");
document.write("BC = " + BC_kry() + "<br>");
document.write("AC = " + AC_kry());