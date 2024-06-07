var color= "#120314";
var imagen = "url(imagen/color1.jpg)";
var num = 1;
function cambiodefondo(){
    setInterval(fondo,1000);
}

function fondo(){
    num++;

    var imagenes =["url(imagen/color1.jpg)","url(imagen/color2.jpg)","url(imagen/color3.jpg)","url(imagen/color4.jpg)"]
    var imagenesFondo = imagenes [num%imagenes.length]

    document.body.style.backgroundColor = color;
    document.body.style.backgroundImage = imagenesFondo;
}