import { Autor } from "./entities/Autor";
import { Biblioteca } from "./entities/Biblioteca";
import { LibroImpreso } from "./entities/LibroImpreso";

const huxley = new Autor("Aldous", "Huxley");
const orwell = new Autor("George", "Orwell");

const libro1 = new LibroImpreso("Un mundo feliz", huxley);
const libro2 = new LibroImpreso("Rebelion en la granja", orwell);

const biblioteca = new Biblioteca();
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

biblioteca.mostrarCatalogo();