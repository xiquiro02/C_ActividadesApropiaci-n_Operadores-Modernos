export function actualizarPerfil(perfil, ...nuevosDatos)
{
  return {
    ...perfil,
    nuevosDatos
  }
}