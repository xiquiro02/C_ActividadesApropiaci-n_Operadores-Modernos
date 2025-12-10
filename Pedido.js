export function procesarPedido(pedido, ...extras)
{
  return {
    ...pedido,
    extras
  }
}