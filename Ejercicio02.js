import { agregarInventario } from "./ControlInventario.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

/*2. Control de inventario con inmutabilidad y spread
Partiendo del arreglo inicial:
const inventario = ["cámara", "trípode", "micrófono"];
Crea una función agregarInventario(lista, nuevoItem) que devuelva una nueva lista sin
modificar la original y que registre un mensaje indicando cuántos ítems tiene ahora el
inventario.*/
// const imprimir = require("prompt-sync")();

const inventario = ["cámara", "trípode", "micrófono"];

let nuevoItem01 = prompt("Ingresa un elemento para la lista del inventario: ");
let nuevoItem02 = prompt("Ingresa otro elemento para la lista del inventario: ");

let inventarioActualizado = agregarInventario(inventario, nuevoItem01);

console.log(inventario);
console.log(inventarioActualizado);

let inventarioActualizado02 = agregarInventario(inventarioActualizado, nuevoItem02);

console.log(inventarioActualizado02);

