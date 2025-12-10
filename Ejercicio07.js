/* 7. Evaluación de datos con try...catch + spread
Escribe una función evaluar(...valores) que: 
• Reciba varios números mediante rest.
• Use un try...catch para verificar que todos sean numéricos.
• Si encuentra un valor no numérico, captura el error y muestra un mensaje adecuado.
• Si todo es válido, crea una nueva lista (sin mutar la original) y retorna el promedio. */

import { evaluar } from "./EvalucionDatos.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valor1 = Number(prompt("Ingresa un número: "));
let valor2 = Number(prompt("Ingresa un número: "));
let valor3 = Number(prompt("Ingresa un número: "));

let resultado = evaluar(valor1, valor2, valor3);

console.log(`El promedio es: ${resultado}`);