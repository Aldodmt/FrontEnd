var database = [
    {nombre: 'Moises', apellido: 'Avalos', direccion: 'MRA'},
    {nombre: 'Osmar', apellido: 'Torres', direccion: 'San Lorenzo'},
    {nombre: 'Aldo', apellido: 'Torres', direccion: 'Capiata'},
    {nombre: 'Carlos', apellido: 'Ortiz', direccion: 'Capiata'},
    {nombre: 'Carlos', apellido: 'Ledesma', direccion: 'Itaugua'}
];

function leerJSON(){
    var tabla="<tr><td colspan=3><h3>Tabla de nombres.</h3 ></td></tr>";

    for(var i in database){
        tabla+= "<tr>";
        tabla+= 
         "<td>"+database[i].nombre+"</td>"
        +"<td>"+database[i].apellido+"</td>"
        +"<td>"+database[i].direccion+"</td>";
        tabla+="</tr>";
    }
    document.querySelector("#Tabla").innerHTML = tabla;
};

document.querySelector("#boton").addEventListener("click", leerJSON);