export function procesarPedido(pedido, ...extras)
{
  return {
    ...pedido,
    extras
  }
}
// export const procesarPedido = (pedido, ...extras) => ({...pedido, extras });