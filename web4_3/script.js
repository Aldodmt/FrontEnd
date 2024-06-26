fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => response.json())
.then(data => leerJSON(data))
.catch(error => console.error('Error',error));
function leerJSON(data){
    var tabla = "<p>"+"Nombre del pokemon: "+data.name+"</p>"
    document.querySelector("#Tabla").innerHTML = tabla;
};

window.onload = leerJSON;