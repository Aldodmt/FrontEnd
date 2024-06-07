function resaltar_parrafo(){
    var parrafo = document.getElementById('p1');
    if(parrafo){
        parrafo.style.backgroundColor = "green";
    }
}

function ocultar(ocultar){
    var ocultar=document.getElementById('p1');

    if(ocultar){
        ocultar.style.color="white";
    }
}

function mostrar(mostrar){
    var mostrar=document.getElementById('p1');

    if(mostrar){
        mostrar.style.color="black";
    }
}

function limpiar(limpio){
    limpio = document.getElementById("p1");

    limpio.style.backgroundColor = "white"
}