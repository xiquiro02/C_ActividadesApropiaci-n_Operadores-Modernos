export function totalProducto(ventas) 
{
  const [{ detalles: { precio, unidades } }] = ventas;

  return precio * unidades;
}
