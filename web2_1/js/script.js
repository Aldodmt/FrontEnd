var num1;
var num2;
var operador;

function escribir(n){
    display = document.getElementById("Display");
    display.value = display.value + n;
}

function operadora(op){
    if(op !='='){
        operador = op;
        display = document.getElementById("Display");
        num1 = display.value;
        display.value = "";
        }else if(op == '='){
        display = document.getElementById("Display");
        resul = document.getElementById("Display_resultado");
        num2 = display.value;
        display.value = (num1 + operador + num2);
        resul.value = eval((num1 + operador + num2));
        }else if(op=='-'){
        display = document.getElementById("Display");
        resul = document.getElementById("Display_resultado");
        display.value = (num1 + operador + num2);
        resul.value = eval((num1 + operador + num2));
        }else if(op=='*'){
        display = document.getElementById("Display");
        resul = document.getElementById("Display_resultado");
        display.value = (num1 + operador + num2);
        resul.value = eval((num1 + operador + num2));
        }
        if(op=='limpiar'){
            display.value = "";
            resul.value = "";
        }
}
