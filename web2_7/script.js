function convertir(){
    var num = document.getElementById("numero").value;
    resul = document.getElementById("tabla");
    if(num <= 0 ){
            alert("Ingrese un numero valido");
        }else{
            
          for(x = 0 ; x <= 10 ; x++){
            resul.innerHTML += "<tr><td>"+num + " x " + x + " = "+ (num * x) + "</td></tr>";
          }
            
        }
        
        
}

document.querySelector("#boton").addEventListener("click", convertir);