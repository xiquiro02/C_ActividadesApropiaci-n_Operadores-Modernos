/* 8. Fusión de colecciones y validación final
Crea una función fusionarColecciones(lista1, lista2) que:
• Use spread para fusionar las dos listas sin mutarlas.
• Valide dentro de un try...catch que ambas listas sean arreglos.
• Si no lo son, lanza un error personalizado.
• Retorna la colección final. */

import { fusionarColecciones } from "./FusionColecciones.js";

const a = [1, 2, 3];
const b = [4, 5, 6];

const resultado = fusionarColecciones(a, b);

console.log("Colección fusionada:", resultado);
