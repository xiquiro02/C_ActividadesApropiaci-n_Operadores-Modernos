import { procesarPedido } from "./Pedido.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

/*  1. Gestión de pedidos con rest y destructuración
Crea una función procesarPedido(pedido, ...extras) donde pedido es un objeto con {cliente,
producto, cantidad}.
• Usa destructuración para obtener sus propiedades.
• Usa parámetros rest para almacenar los extras del pedido.
La función debe retornar un objeto final con toda la información consolidada.*/
// const { procesarPedido } = require("./Pedido.js");
// const prompt = require("prompt-sync")();

const pedido =
    {
        cliente: "Stefy",
        producto: "Manillas",
        cantidad: 20
    }

let extras01 = prompt("Ingresa los pedidos extras: ");
let extras02 = prompt("Ingresa los pedidos extras: ");
let extras03 = prompt("Ingresa los pedidos extras: ");

let { extras } = procesarPedido(pedido, extras01, extras02, extras03);

console.log(extras);
