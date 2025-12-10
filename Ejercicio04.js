/*4. Mezcla de configuraciones con spread y destructuración
Simula un sistema donde existen opciones por defecto y opciones personalizadas:
const defaults = { tema: "claro", idioma: "es" };
Crea una función configurarUsuario(defaults, personalizadas) que:
• Use spread para combinar ambas configuraciones sin mutarlas.
• Use destructuración para obtener el idioma configurado.
Retorna el idioma resultante.  */

import { configurarUsuario } from "./MezclarConfiguraciones.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const defaults = { 
    tema: "claro", 
    idioma: "es" 
};

let idiomaNuevo = prompt("Ingresa el idioma preferido: ");
let temaNuevo = prompt("Ingresa el tema (Oscuro o Claro): ");

const personalizadas = {
    tema: temaNuevo,
    idioma: idiomaNuevo
};


let idiomaFinal = configurarUsuario(defaults, personalizadas);

console.log(`Idioma configurado: ${idiomaFinal}`);