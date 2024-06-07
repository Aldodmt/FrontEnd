var lista = new Array("imagen/galeria/color1.jpg","imagen/galeria/color2.jpg", 
"imagen/galeria/color3.jpg", "imagen/galeria/color4.jpg", "imagen/galeria/color5.jpg", 
"imagen/galeria/color6.jpg", "imagen/galeria/color7.jpg");
var n=0;

function cambioImagen(siguiente){
    var imagen = document.getElementById("Principal");
    if(siguiente){
        n++;
    }else {
        n--;
    }
    imagen.src = lista[n];
}

function cambioMiniatura(fuente){
    var imagen = document.getElementById("Principal");
    imagen.src = fuente;
}

document.querySelector("#botonsiguiente").addEventListener("click", function(){
    cambioImagen(true);
});
document.querySelector("#botonatras").addEventListener("click", function(){
    cambioImagen(false);
});

document.querySelector(".minia").addEventListener("click", function(){
    cambioMiniatura(this.src);
});


