class Persona{
    constructor(nombre, edad,telef){
        this.nombre = nombre;
        this.edad = edad;
        this.telef = telef;
    }

    mostrarDatos(){
        return "Nombre: "+this.nombre+"<br> Edad: "+this.edad+"<br> Telefono: "+this.telef;
    }
}

class Alumno extends Persona{
    constructor(nombre, edad, telef, numerMatricula, fechaMatricula){
        super(nombre, edad, telef);
        this.numerMatricula = numerMatricula;
        this.fechaMatricula = fechaMatricula;
    }
    
    mostrarDatos(){
        return super.mostrarDatos()+ "<br> Numero Matricula: "+this.numerMatricula+"<br> Fecha Matricula: "+this.fechaMatricula
    }

    
}

var p1 = new Persona("Aldo", 18, "0987264101");
document.write(p1.mostrarDatos() + "<hr>");
var p2 = new Persona("Carlos", 25, "0987264101");
document.write(p2.mostrarDatos() + "<hr>");
var p3 = new Persona("Ariel", 60, "0987264101");
document.write(p3.mostrarDatos() + "<hr>");
var a1 = new Alumno("Aldo", 18, "0987264101", 123, "28/07/1987");
document.write(a1.mostrarDatos()+"<hr>");