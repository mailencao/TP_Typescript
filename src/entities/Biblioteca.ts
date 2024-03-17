import { LibroImpreso } from "./LibroImpreso";

export class Biblioteca {
    private libros: LibroImpreso[] = []
    
    agregarLibro(libro: LibroImpreso): LibroImpreso {
        this.libros.push(libro)
        console.log(`Libro cargado: ${libro.obtenerResumen()} `)
        return libro
    };

    mostrarCatalogo(): LibroImpreso[]{
        console.log(`Catalogo de la biblioteca: `)
        for (let i = 0; i < this.libros.length; i++) {
            const libro = this.libros[i];
            console.log(libro.obtenerResumen())
        }
        return this.libros
    }
};