export function registrarActividad(actividad)
{
    try 
    {

        if (!actividad.nombre || !actividad.fecha) 
        {
            throw new Error("Actividad no es válida.");
        }

        console.log(`Actividad registrada correctamente:
            Nombre: ${actividad.nombre} y
            Fecha: ${actividad.fecha}`);
    }
    catch (error) 
    {
        console.log(error.message);
    }
}