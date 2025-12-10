/*5. Actualización de perfiles con inmutabilidad + rest
Crea una función actualizarPerfil(perfil, ...nuevosDatos).
Cada elemento de nuevosDatos será un objeto parcial como {edad: 22} o {ciudad:
"Medellín"}.
• Combina todos los datos usando inmutabilidad y spread.
Retorna el nuevo perfil completo. */

import { actualizarPerfil } from "./ActualizacionPerfiles.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const perfil = {
  nombre: "Ximena",
  edad: 23,
  ciudad: "Piedecuesta"
};

let nuevoNombre = prompt("Ingresa el nuevo nombre:");
let nuevaEdad = prompt("Ingresa la nueva edad: ");
let nuevaCiudad = prompt("Ingresa la nueva ciudad: ");
let nuevoTelefono = prompt("Ingresa el teléfono: ");


const perfilActualizado = actualizarPerfil(
  perfil,
  { nombre: nuevoNombre },
  { edad: nuevaEdad },
  { ciudad: nuevaCiudad },
  { telefono: nuevoTelefono }
) ;

console.log("Perfil original:", perfil);
console.log("Perfil actualizado:", perfilActualizado);
