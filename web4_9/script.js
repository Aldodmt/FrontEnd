class Rectangulo{
    constructor(largo, ancho){
        this.largo = Number(largo);
        this.ancho = Number(ancho);
    }

    CalcularPerimetro(){
        return (this.largo+this.ancho)*2;
    }

    CalcularArea(){
        return this.largo*this.ancho;
    }
}

class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado, lado);
    }
}
var rec1 = new Rectangulo(6,7);
document.write("Procesos de Rectangulo.<hr>")
document.write("El perimetro es: "+rec1.CalcularPerimetro());
document.write("<br>El area es: "+rec1.CalcularArea()+"<hr>");

var cua1 = new Cuadrado(10);
document.write("Procesos del Cuadrado.<hr>")
document.write("El perimetro es: "+cua1.CalcularPerimetro());
document.write("<br>El area es: "+cua1.CalcularArea()+"<br>");

class Personaje{
    constructor(nombre, tipoataque){
        this.nombre = nombre;
        this.tipoataque = tipoataque;
    }

    MostrarDatos(){
        return "Nombre del personaje: "+this.nombre+"<br>Tipo de ataque: "+this.tipoataque;
    }

    Atacar(){
        return "<br>Atacando sin nada..."
    }
}

class Mago extends Personaje{
    constructor(nombre, tipoataque){
        super(nombre, tipoataque);
    }

    Atacar(){
        return "<br>Ataque magico...";
    }
}

class Guerrero extends Personaje{
    constructor(nombre, tipoataque){
        super(nombre, tipoataque);
    }

    Atacar(){
        return "<br>Ataque fisico...";
    }
};

var person = new Personaje("Link", "Fisico");
var ap = new Mago("Malzahar", "Magico");
var ad = new Guerrero("Darius", "Fisico");
document.write("<hr>Datos de los personajes.<hr>");
document.write(person.MostrarDatos());
document.write(person.Atacar()+"<hr>");
document.write(ap.MostrarDatos());
document.write(ap.Atacar()+"<hr>");
document.write(ad.MostrarDatos());
document.write(ad.Atacar());

class Biblioteca{
    constructor(nombre){
        this.libro = [];
        this.nombre = nombre;
    }

    addLibro(libro){
        this.libro.push(libro);
    }

    mostrarLibro(){
        let libros = "";
        for(let x=0 ; x < this.libro.length ; x++){
            libros += this.libro[x].mostrar()+"<hr>";
        }
        return "Nombre de la biblioteca: "+this.nombre+"<hr>Libros: "+libros;
    }
}

class Libro{
    constructor(titulo, autor, genero, pagina){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.pagina = pagina;
    }

    mostrar(){
        return "<br>Titulo: "+this.titulo+
        "<br>Autor: "+this.autor+
        "<br>Genero: "+this.genero+
        "<br>Paginas: "+this.pagina;
    }

}

const libro1 = new Libro("El Quijote", "Miguel de Cervantes", "Novela", 863);
const libro2 = new Libro("El Alquimista", "Paulo Coelho", "Novela", 192);

var biblio = new Biblioteca("Casa central");

biblio.addLibro(libro1);
biblio.addLibro(libro2);

document.write(biblio.mostrarLibro());