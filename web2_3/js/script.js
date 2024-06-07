var proceso;
var num;
function convertir(){
    moneda1 = document.getElementById("moneda1").value;
    moneda2 = document.getElementById("moneda2").value;
    cant = document.getElementById("cantidad").value;
    resul = document.getElementById("resultado");
    if(moneda1 == "dolar" && moneda2 == "pyg"){
        resul.innerHTML += "Gs. " +  (cant * 7460);
    }else if(moneda1 == "real" && moneda2 == "pyg"){
        resul.innerHTML += "Gs. " +  (cant * 1440);
    }else if(moneda1 == "peso" && moneda2 == "pyg"){
        resul.innerHTML += "Gs. " +  (cant * 7);
    }

}   