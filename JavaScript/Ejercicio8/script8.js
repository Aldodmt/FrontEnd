var fecha = new Date();
var hora = fecha.getHours();
var minuto = fecha.getMinutes();
function mostrarFecha(){
    document.write("<br><b>Hoy es: "+fecha+" <br><b>");
}

function mostrarHora(){
    document.write("<br><b>La hora es: "+hora+ " : "+ minuto+" <br><b>");
}