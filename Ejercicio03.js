import { registrarActividad } from "./RegistroActividades.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

/*3. Registro de actividades con manejo de errores
Escribe una función registrarActividad(actividad) que reciba un objeto que debe contener
{nombre, fecha}.
• Usa un try...catch para validar que ambas propiedades existan. 
• Si falta alguna, lanza un error indicando que la actividad no es válida.
• Si todo está correcto, muestra un mensaje confirmando el registro. */

let nombre = prompt("Ingrese nombre de la actividad: ");
let fecha = prompt("Ingrese fecha de la actividad: ");

const actividad = {
    nombre,
    fecha
};

registrarActividad(actividad);