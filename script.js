const url = window.location.search;
const urlParametros = new URLSearchParams(url);
const getLevel = urlParametros.get("nivel");

var flag = 0;

var pontos = 0;

var vida = 3;

document.getElementById("vida").innerHTML = "Nível: " + getLevel + "<br>" + "Pontos: " + pontos + "<br>" + "Vida: " + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_cheio.png' class='imagem'>";

if(getLevel == "Fácil"){
    setInterval(function() {

        var aleatoryNumber = 30;

        while(aleatoryNumber == 30) {
            aleatoryNumber = Math.floor(Math.random() * (35 - 0 + 1)) + 0;
        }

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

        var aleatoryNumber = 30;

        while(aleatoryNumber == 30) {
            aleatoryNumber = Math.floor(Math.random() * (35 - 0 + 1)) + 0;
        }

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
        
        var aleatoryNumber = 30;

        while(aleatoryNumber == 30) {
            aleatoryNumber = Math.floor(Math.random() * (35 - 0 + 1)) + 0;
        }

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

    pontos = pontos + 10;

    var i = 0;

    while(i < document.getElementsByTagName("td").length) {
        if(i != 30) {
            document.getElementsByTagName("td")[i].style.visibility = "hidden";
        }

        i++;
    }

    if(vida == 1) {
        document.getElementById("vida").innerHTML = "Nível: " + getLevel + "<br>" + "Pontos: " + pontos + "<br>" + "Vida: " + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_vazio.png' class='imagem'>" + "<img src='img/coracao_vazio.png' class='imagem'>";
    } else if(vida == 2) {
        document.getElementById("vida").innerHTML = "Nível: " + getLevel + "<br>" + "Pontos: " + pontos + "<br>" + "Vida: " + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_vazio.png' class='imagem'>";
    } else if(vida == 3) {
        document.getElementById("vida").innerHTML = "Nível: " + getLevel + "<br>" + "Pontos: " + pontos + "<br>" + "Vida: " + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_cheio.png' class='imagem'>";
    }
}

function verificarSeClicou() { 
    if(flag == 0) {
        vida = vida - 1;
    }

    if(vida == 0) {
        alert("GAME OVER !!! | " + "Pontos: " + pontos);
        location.href = "home.html";
    } else if(vida == 1) {
        document.getElementById("vida").innerHTML = "Nível: " + getLevel + "<br>" + "Pontos: " + pontos + "<br>" + "Vida: " + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_vazio.png' class='imagem'>" + "<img src='img/coracao_vazio.png' class='imagem'>";
    } else if(vida == 2) {
        document.getElementById("vida").innerHTML = "Nível: " + getLevel + "<br>" + "Pontos: " + pontos + "<br>" + "Vida: " + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_vazio.png' class='imagem'>";
    } else if(vida == 3) {
        document.getElementById("vida").innerHTML = "Nível: " + getLevel + "<br>" + "Pontos: " + pontos + "<br>" + "Vida: " + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_cheio.png' class='imagem'>" + "<img src='img/coracao_cheio.png' class='imagem'>";
    }
}


