"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.libros = [];
    }
    agregarLibro(libro) {
        this.libros.push(libro);
        console.log(`Libro cargado: ${libro.obtenerResumen()} `);
        return libro;
    }
    ;
    mostrarCatalogo() {
        console.log(`Catalogo de la biblioteca: `);
        for (let i = 0; i < this.libros.length; i++) {
            const libro = this.libros[i];
            console.log(libro.obtenerResumen());
        }
        return this.libros;
    }
}
exports.Biblioteca = Biblioteca;
;
