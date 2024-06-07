function geoBuscame(){
    const estado = document.querySelector("#estado");
    const map_link= document.querySelector("#map_link");

    map_link.href = "";
    map_link.textContent = "";

    function success(position){
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        
        estado.textContent = "";
        map_link.href = `https://www.openstreetmap.org/#map-18/${latitud}/${longitud}`;
        map_link.textContent = `Latitud: ${latitud} °, Longitud: ${longitud} °`;
    }

    function error(){
        estado.textContent="No se puede mostrar tu ubicacion";
    }

    if(!navigator.geolocation){
        estado.textContent = "Tu navegador no tiene soporte de Geolocation";
    }else{
        estado.textContent = "Localizando...";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
document.querySelector("#buscame").addEventListener("click", geoBuscame);