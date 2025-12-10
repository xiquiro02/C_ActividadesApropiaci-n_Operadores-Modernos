/*5. Análisis de ventas con destructuración profunda
Dado este arreglo:
const ventas = [
{ producto: "teclado", detalles: { precio: 50, unidades: 3 } },
{ producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];
Crea una función que emplee destructuración anidada para obtener precio y unidades del
primer producto, y retorne el total vendido (precio × unidades). */

import { totalProducto } from "./AnalisisVentas.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

const totalVendido = totalProducto(ventas);

console.log(`El total del producto es: ${totalVendido}`);