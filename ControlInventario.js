export function agregarInventario(lista, nuevoItem)
{
  const nuevaLista = [...lista, nuevoItem];
  console.log(`Items Actualizados ${nuevaLista.length}`);
  return nuevaLista;
}