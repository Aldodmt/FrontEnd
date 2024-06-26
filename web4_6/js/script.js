$(function(){
    var num1= '0';
    var num2= '0';
    var operador= '';
    var resultado= '';
    var mensaje= '';

    var Display = $('.display');

    $('.keyboard').on('click', function(e){
        switch(e.target.id){
                case '1':
                agregarDigito('1');
                break;
                case '2':
                agregarDigito('2');
                break;
                case '3':
                agregarDigito('3');
                break;
                case '4':
                agregarDigito('4');
                break;
                case '5':
                agregarDigito('5');
                break;
                case '6':
                agregarDigito('6');
                break;
                case '7':
                agregarDigito('7');
                break;
                case '8':
                agregarDigito('8');
                break;
                case '9':
                agregarDigito('9');
                break;
                case '0':
                agregarDigito('0');
                break;
                case '+':
                    agregarOperador('+');
                    break;
                    case '-':
                        agregarOperador('-');
                        break;
                        case '*':
                            agregarOperador('*');
                            break;
                            case '%':
                                agregarOperador('%');
                                break;
                                case '=':
                                    calcular();
          }
    });

    function display(){
    }

    function agregarDigito(digito){
        let aux = Display.text();
        Display.text((aux + digito));
    }

    function agregarOperador(ope){
        operador=ope;
        if(ope!='='){
            num1 = Display.text();
            Display.text(' ');
        }
    }

    function calcular(){
        
        let nume1 = parseInt(num1);
        let nume2 = parseInt(Display.text());
        if(num1 === ''||num2 === ''|| operador===''){
            mensaje=alert('tienes que cargar un valor');
            return mensaje;
        }else{
            resultado=eval((nume1+operador+nume2));
        }
        mostrarResultado(resultado);
    }

    function mostrarResultado(res){
        var Resultado = $('.display_resultado');
        Resultado.text(res);
    }


});