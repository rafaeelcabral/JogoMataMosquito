const url = window.location.search;
const urlParametros = new URLSearchParams(url);
const getLevel = urlParametros.get("nivel");

var flag = 0;

var vida = 3;

console.log(document.getElementsByTagName("td"));

document.getElementById("vida").innerHTML = "Nível: " + getLevel + "<br>" + "Vida: " + vida;

if(getLevel == "Fácil"){
    setInterval(function() {

        var aleatoryNumber = Math.floor(Math.random() * (35 - 0 + 1)) + 0;

        document.getElementsByTagName("td")[aleatoryNumber].style.visibility = "visible";

        setTimeout(function() {
            verificarSeClicou();
            flag = 0;
            document.getElementsByTagName("td")[aleatoryNumber].style.visibility = "hidden";
        }, 5000)

    }, 5000)
}    

if(getLevel == "Médio"){
    setInterval(function() {

        var aleatoryNumber = Math.floor(Math.random() * (35 - 0 + 1)) + 0;

        document.getElementsByTagName("td")[aleatoryNumber].style.visibility = "visible";

        setTimeout(function() {
            verificarSeClicou();
            flag = 0;
            document.getElementsByTagName("td")[aleatoryNumber].style.visibility = "hidden";
        }, 2500)

    }, 2500)
}    

if(getLevel == "Difícil"){
    setInterval(function() {

        var aleatoryNumber = Math.floor(Math.random() * (35 - 0 + 1)) + 0;

        document.getElementsByTagName("td")[aleatoryNumber].style.visibility = "visible";

        setTimeout(function() {
            verificarSeClicou();
            flag = 0;
            document.getElementsByTagName("td")[aleatoryNumber].style.visibility = "hidden";
        }, 1000)

    }, 1000)
}    

if(getLevel != "Difícil" && getLevel != "Médio" && getLevel != "Fácil") {
    alert("Selecione um Nível para jogar!");
    location.href = "home.html";
}

function clicou() {

    flag = 1;

    var i = 0;

    while(i < document.getElementsByTagName("td").length) {

        if(i != 30) {
            document.getElementsByTagName("td")[i].style.visibility = "hidden";
        }

        i++;

    }

}

function verificarSeClicou() {
    if(flag == 0) {
        vida = vida - 1;
    }

    if(vida == 0) {
        alert("GAME OVER !!!");
        location.href = "home.html";
    }

    document.getElementById("vida").innerHTML = "Nível: " + getLevel + "<br>" + "Vida: " + vida;
}


