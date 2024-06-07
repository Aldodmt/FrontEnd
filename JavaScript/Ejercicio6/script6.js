
function saludo(){
    let Color;
    Color = prompt("Hola ;), escribe el nombre de un color en ingles)","");
    document.bgColor=Color;
}

function fondo(color){
    let Color = color;
    document.bgColor=Color;
}

function texto(color){
    let texto= document.getElementById("texto")
    let Color = color;
    texto.style.color = Color;
}